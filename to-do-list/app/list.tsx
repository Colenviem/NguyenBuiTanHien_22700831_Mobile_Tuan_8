import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://683065baf504aa3c70f7ae07.mockapi.io/ToDoList";

export default function List() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const { name } = useLocalSearchParams();
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get(API);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const displayData = data.filter(item => item.content.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.push("/")}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <Image
                    source={{ uri: "https://res.cloudinary.com/dixzxzdrd/image/upload/v1761045396/Rectangle_sokxf7.png" }}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.textHello}>Hi {name}</Text>
                    <Text style={styles.textSub}>Have a great day ahead</Text>
                </View>
            </View>

            <View style={styles.searchBox}>
                <Ionicons name="search-outline" size={20} color="#555" style={{ marginRight: 8 }} />
                <TextInput 
                    placeholder="Search" 
                    value={searchText}
                    onChangeText={setSearchText}
                    style={{ flex: 1 }} 
                />
            </View>

            <View style={{ height: 400 }}>
                <FlatList
                    data={displayData}
                    renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Ionicons name="checkbox-outline" size={20} color="#8353E2" />
                        <Text style={styles.itemText}>{item.content}</Text>
                        <TouchableOpacity
                            onPress={() => router.push({
                                pathname: "/add", 
                                params: { id: item.id, content: item.content, name }
                            })}
                        >
                            <Ionicons name="create-outline" size={20} color="#555" />
                        </TouchableOpacity>
                    </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <TouchableOpacity style={styles.addBtn} onPress={() => router.push({ pathname: "/add", params: { name } })}>
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 50,
        backgroundColor: "#fff",
        gap: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backBtn: {
        padding: 10,
        borderRadius: 50,
        marginRight: 15,     
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textHello: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textSub: {
        fontSize: 14,
        color: "#555",
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        height: 40,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    itemText: {
        flex: 1,
        marginLeft: 10,
    },
    addBtn: {
        alignItems: "center",
        backgroundColor: "#8353E2",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    addText: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
});

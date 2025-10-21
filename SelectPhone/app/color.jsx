import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Color() {
    const colorsData = [
        { name: 'Bạc', hex: '#ADD8E6', imageUrl: 'https://res.cloudinary.com/dixzxzdrd/image/upload/v1759477329/vs_silver_qsfxpe.png' },
        { name: 'Đỏ', hex: '#FF0000', imageUrl: 'https://res.cloudinary.com/dixzxzdrd/image/upload/v1759477327/vs_red_w6n8ju.png' },
        { name: 'Đen', hex: '#000000', imageUrl: 'https://res.cloudinary.com/dixzxzdrd/image/upload/v1759477326/vs_black_xilxvl.png' }, 
        { name: 'Xanh dương', hex: '#4169E1', imageUrl: 'https://res.cloudinary.com/dixzxzdrd/image/upload/v1759477328/vs_blue_hfzsna.png' },
    ];

    const router = useRouter();
    const params = useLocalSearchParams();
    
    const initialColor = colorsData.find(c => c.imageUrl === params.initialImg) || colorsData[0];
    
    const [selectedColorHex, setSelectedColorHex] = useState(initialColor.hex); 
    
    const getSelectedColorObject = () => {
        return colorsData.find(c => c.hex === selectedColorHex) || colorsData[0];
    };
    
    const selectedColorObject = getSelectedColorObject();
    
    const getProductImage = () => {
        return selectedColorObject.imageUrl; 
    };

    const handleDone = () => {
        router.push({ 
            pathname: "/", 
            params: { 
                selectedImg: selectedColorObject.imageUrl 
            } 
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.productHeader}>
                    <Image
                        source={{ uri: getProductImage() }}
                        style={styles.productImage}
                        resizeMode="contain"
                    />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
                        <Text style={styles.productBrand}>Hàng chính hãng</Text>
                        <Text style={[styles.productBrand, { fontWeight: 'bold', color: '#333' }]}>
                            Màu: {selectedColorObject.name}
                        </Text>
                        <Text style={styles.productBrand}>Cung cấp bởi Tiki Tradding</Text>
                        <Text style={styles.productBrand}>1.790.000 đ</Text>
                    </View>
                </View>

                <View style={styles.colorSelectionSection}>
                    <Text style={styles.colorSelectionTitle}>Chọn một màu bên dưới:</Text>
                    <View style={styles.colorOptionsContainer}>
                        {colorsData.map((colorItem, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                            styles.colorBox,
                            { backgroundColor: colorItem.hex },
                            selectedColorHex === colorItem.hex && styles.selectedColorBox, 
                            ]}
                            onPress={() => setSelectedColorHex(colorItem.hex)}
                        />
                        ))}
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.doneButton}
                    onPress={handleDone} // Gọi hàm handleDone đã sửa
                >
                    <Text style={styles.doneButtonText}>XONG</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    productHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 15,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productBrand: {
        fontSize: 14,
        color: '#666',
    },
    colorSelectionSection: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
    },
    colorSelectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    colorOptionsContainer: {
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 15, 
    },
    colorBox: {
        width: 85, 
        height: 80, 
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    selectedColorBox: {
        borderColor: '#007AFF', 
    },
    doneButton: {
        backgroundColor: '#6A5ACD', 
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        width: '95%', 
        alignSelf: 'center', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    doneButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
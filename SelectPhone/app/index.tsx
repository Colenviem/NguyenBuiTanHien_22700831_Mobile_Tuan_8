import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useLocalSearchParams, useRouter } from 'expo-router';

const DEFAULT_IMAGE = "https://res.cloudinary.com/dixzxzdrd/image/upload/v1759477328/vs_blue_hfzsna.png";

export default function Index() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const currentImage = String(params.selectedImg || DEFAULT_IMAGE);

  const navigateToColorSelection = () => {
    router.push({ 
      pathname: "/color", 
      params: { 
        initialImg: currentImage 
      } 
    });
  };

  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: currentImage }}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View>
        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Ionicons key={i} name="star" size={20} color="#FFD700" style={styles.starIcon} />
            ))}
          </View>
          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity>
             <Ionicons name="help-circle-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.colorButton} 
          onPress={navigateToColorSelection}
        >
          <Text style={styles.colorButtonText}>4 MÀU-CHỌN MÀU</Text>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
    gap: 20,
  },
  productImage: {
    width: '100%',
    height: 360, 
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 5,
  },
  starIcon: {
    marginHorizontal: 1,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF0000', 
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  promoText: {
    fontSize: 14,
    color: '#000',
    marginRight: 5,
    fontWeight: '600'
  },
  colorButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  colorButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buyButton: {
    backgroundColor: '#FF0000', 
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 150
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
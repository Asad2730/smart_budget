// screens/detail/Detail.tsx
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { products } from './products';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigations/types';
import { CustomBtn } from '../../components/ui/customPressable';

const Detail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const route = useRoute();
  const { userId }: any = route.params;

  const product = products.find(item => item.id === userId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <CustomBtn  onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </CustomBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  button: {
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Detail;

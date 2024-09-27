import { FlatList, Image, Text, StyleSheet, View } from "react-native";
import { CustomSafeArea } from "../../components/ui/customSafeArea";
import { IProduct, products } from "./products";
import { CustomCard } from "../../components/ui/customCard";

export default function Home() {
  const RenderItem = ({ item }: { item: IProduct }) => (
    <CustomCard >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </CustomCard>
  );

  return (
    <CustomSafeArea>
     <View style={{alignItems:'center'}}>
     <FlatList
        data={products}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
     </View>
    </CustomSafeArea>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    justifyContent: 'space-between',
  },
 
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
});

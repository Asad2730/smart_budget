import {
  FlatList,
  Image,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { CustomSafeArea } from "../../components/ui/customSafeArea";
import { IProduct, products } from "./products";
import { CustomCard } from "../../components/ui/customCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigations/types";

export default function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const RenderItem = ({ item }: { item: IProduct }) => (
    <CustomCard>
      <Pressable onPress={()=>navigation.navigate('detail',{userId:item.id})}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </Pressable>
    </CustomCard>
  );

  return (
    <CustomSafeArea>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={products}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id.toString()}
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
    justifyContent: "space-between",
  },

  image: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
});

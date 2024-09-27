import { ReactNode } from "react";
import { StyleSheet, View, Appearance, StyleProp, ViewStyle } from "react-native";

interface ICustomCard {
  children: ReactNode;
  customStyle?:StyleProp<ViewStyle>
}

export const CustomCard = ({ children,customStyle}: ICustomCard) => {
  const colorScheme = Appearance.getColorScheme();
  const cardColor = colorScheme === "dark" ? "#2C2C2E" : "white";
  return (
    <View style={[style.card, { backgroundColor: cardColor },customStyle]}>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});

import { ReactNode } from "react";
  import { StyleSheet, Appearance, SafeAreaView , StatusBar,
    Platform} from "react-native";

interface ICustomSafeArea {
  children: ReactNode;
}

export const  CustomSafeArea = ({children}:ICustomSafeArea)=>{

    
  const colorScheme = Appearance.getColorScheme();
  const backgroundColor = colorScheme === "dark" ? "#1C1C1E" : "white";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
        {children}
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
})

import { ReactNode } from "react";
import { Pressable, PressableProps, StyleProp, StyleSheet } from "react-native";


interface ICustomBtn {
    children?: ReactNode;
    onPress?:()=>void    
    customStyle?:StyleProp<PressableProps>
}

export const CustomBtn = ({children,onPress,customStyle}:ICustomBtn)=> (
    <Pressable
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "#3399ff" : "#4CAF50",
      },
     customStyle?customStyle:defaultStyle.pressable,
    ]}
    onPress={onPress}
  >
  {children}
  </Pressable>
)


const defaultStyle = StyleSheet.create({
    pressable: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
})
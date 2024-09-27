import { StyleProp, TextInput, TextStyle,StyleSheet } from "react-native";


interface ICustomInput{
    placeHolder?:string
    onChangeText?:(text:any)=>void
    customStyle?:StyleProp<TextStyle>
}

export const CustomInput = ({placeHolder,onChangeText,customStyle}:ICustomInput)=>(
    <TextInput 
      placeholder={placeHolder}
      onChangeText={onChangeText}
      style={customStyle?customStyle:defaultStyle.inputStyle}
    />
)

const defaultStyle = StyleSheet.create({
    inputStyle: {
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#F5F5F5",
      },
})
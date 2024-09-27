import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Pressable,
  Animated,
} from "react-native";
import { CustomInput } from "../../components/ui/customInput";
import { CustomCard } from "../../components/ui/customCard";
import { CustomSafeArea } from "../../components/ui/customSafeArea";
import { CustomBtn } from "../../components/ui/customPressable";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigations/types";

interface IAuth {
  email: string;
  password: string;
}

export default function Auth() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState<IAuth>({
    email: "",
    password: "",
  });
  const [scaleValue] = useState(new Animated.Value(1));

  const inputs = [
    { placeHolder: "user@gmail.com", key: "email" },
    { placeHolder: "password", key: "password" },
  ];

  const handleChange = (text: any, key: string) =>
    setForm({ ...form, [key]: text });

  const toggleLoginSignUp = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    setIsLogin(!isLogin);
  };

  return (
    <CustomSafeArea>
      <CustomCard>
        <ImageBackground
          source={require("../../assets/P_illustration.png")}
          style={styles.imageBackground}
        >
          <Image
            source={require("../../assets/Logo.png")}
            style={styles.logoImage}
          />
          <View style={styles.inputContainer}>
            {inputs.map((i, index) => (
              <View style={{ padding: 4 }} key={index}>
                <CustomInput
                  placeHolder={i.placeHolder}
                  onChangeText={(text) => handleChange(text, i.key)}
                />
              </View>
            ))}

            <View style={styles.signInButtonContainer}>
              <CustomBtn
                onPress={() =>navigation.navigate('home')}
              >
                <Text style={styles.signInText}>
                  {isLogin ? "Sign in" : "Sign up"}
                </Text>
              </CustomBtn>

              <Pressable
                 style={({ pressed }) => [
                  styles.signUpText,
                  pressed ? styles.signUpPressed:{},
                ]}
                onPress={toggleLoginSignUp}
              >
                <Text style={styles.signUpText}>
                  {isLogin ? "Don't have an account? Sign up." : "Have an account? Sign in."}
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </CustomCard>
    </CustomSafeArea>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  imageBackground: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    opacity: 0.7,
  },
  signInButtonContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  signInText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#3399ff",
  },
  signUpPressed: {
    textDecorationLine: 'underline',
    opacity: 0.7,

  },
});

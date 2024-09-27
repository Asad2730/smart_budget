import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
import { AuthStackParamList } from "./types";
import Detail from "../screens/home/detail";
import { Pressable, Text } from "react-native"; // Ensure Text is imported

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function Navigation() {
  const handleLogout = (navigation: any) => navigation.navigate('auth');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="auth">
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable onPress={() => handleLogout(navigation)} style={{ marginRight: 10 }}>
                <Text style={{ color: 'blue' }}>Logout</Text>
              </Pressable>
            ),
          })} 
        />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

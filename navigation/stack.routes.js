import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AdoptPetScreen from "../screens/AdoptPetScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AddPetScreen from "../screens/AddPetScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import ContactScreen from "../screens/ContactScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="AdoptPet" options={{headerShown: false}} component={AdoptPetScreen} />
        <Stack.Screen name="Details" options={{headerShown: false}} component={DetailsScreen} />
        <Stack.Screen name="AddPet" options={{headerShown: false}} component={AddPetScreen} />
        <Stack.Screen name="Favourite" options={{headerShown: false}} component={FavouriteScreen} />
        <Stack.Screen name="Contact" options={{headerShown: false}} component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
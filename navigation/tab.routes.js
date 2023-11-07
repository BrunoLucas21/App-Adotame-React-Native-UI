import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
        }} />
        <Tab.Screen name="AdoptPet" component={HomeScreen} options={{
          tabBarLabel: 'Adotar Pet',
          tabBarIcon: ({ color, size }) => <Ionicons name="paw-outline" size={size} color={color} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
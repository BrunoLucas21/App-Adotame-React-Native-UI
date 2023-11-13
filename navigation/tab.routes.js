import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColors } from "../theme";
import HomeScreen from "../screens/HomeScreen";
import AdoptPetScreen from "../screens/AdoptPetScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { HeartIcon, HeartIcon as HeartSolid, HomeIcon, HomeIcon as HomeSolid, PlusIcon, PlusIcon as PlusSolid } from "react-native-heroicons/solid";
import { View } from "react-native";

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShow: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          borderRadius: 50,
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: 10 
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="AdoptPet" component={AdoptPetScreen} options={{headerShown: false}} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == 'Home') {
    icon = focused? <HomeIcon size="30" color={themeColors.bgLight} /> : <HomeSolid size="30" strokeWidth={2}  color="white" />
  } else if (route.name == 'AdoptPet') {
    icon = focused? <PlusIcon size="30" color={themeColors.bgLight} /> : <PlusSolid size="30" strokeWidth={2}  color="white" />
  } else if (route.name == 'Favourite') {
    icon = focused? <HeartIcon size="30" color={themeColors.bgLight} /> : <HeartSolid size="30" strokeWidth={2}  color="white" />
  }

  let buttonClass = focused? "bg-white" : "";
  return (
    <View className={"flex items-center rounded-full p-4 shadow " + buttonClass}>
      {icon}
    </View>
  )
}
import { Image, Text, View } from "react-native";
import { themeColors } from "../theme";
import {  } from "react-native";
import { 
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  HeartIcon, 
  HomeIcon, 
  PhoneIcon, 
  PlusIcon, 
  UserCircleIcon 
} from "react-native-heroicons/solid";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { animais } from "../components/AnimalData";
import AnimalCards from "../components/AnimalCards";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function FavouriteScreen(props) {
  const navigation = useNavigation();
  const item = props.route.params;

  const handleLogout = async () => {
    await signOut(auth);
  }
  return (
    <View className="flex-1 pt-4" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex mt-4">
        <View className="flex-row justify-around">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-2xl">
            <ArrowLeftIcon size="32" color="black" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Person')}
            className="bg-yellow-400 p-2 rounded-2xl ml-64">
            <UserCircleIcon size="32" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View 
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-8 mt-4"
      >
        <Text className="text-center text-3xl text-gray-600 font-bold pt-5">Meus Favoritos</Text>
        <View className="mt-8 py-2">
            <Carousel 
              containerCustomStyle={{ overflow: 'visible' }}
              data={animais}
              loop={true}
              renderItem={({ item }) => <AnimalCards item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={260}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>

        <View className="bg-yellow-400 w-90 h-16 rounded-2xl mt-44 flex flex-row justify-between">
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              className="bg-white p-3 rounded-2xl m-2 justify-center"
            >
              <HomeIcon size="32" color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Contact')}
              className="bg-white p-3 rounded-2xl m-2 justify-center"
            >
              <PhoneIcon size="32" color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Favourite')}
              className="bg-white p-3 rounded-2xl m-2 justify-center"
            >
              <HeartIcon size="32" color="black" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleLogout}
              className="bg-white p-3 rounded-2xl m-2 justify-center"
            >
              <ArrowLeftOnRectangleIcon size="32" color="black" />
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}
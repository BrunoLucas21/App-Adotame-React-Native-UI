import { Image, Text, View } from "react-native";
import { themeColors } from "../theme";
import {  } from "react-native";
import { ArrowLeftIcon, FlagIcon, HeartIcon, HomeIcon, PlusIcon, UserCircleIcon, UserMinusIcon } from "react-native-heroicons/solid";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { animais } from "../components/AnimalData";
import AnimalCards from "../components/AnimalCards";
import VoltarTela from "../components/contents/voltarTela";

export default function FavouriteScreen(props) {
  const item = props.route.params;
  return (
    <View className="flex-1 pt-4" style={{ backgroundColor: themeColors.bg }}>
      <View
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      >
        <Image
          source={require('../assets/images/image-background.png')}
          style={{ width: '100%', height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, }}
        />
      </View>
      <SafeAreaView className="flex mt-4">
        <View className="flex-row justify-around ">
          <VoltarTela />
          <TouchableOpacity 
            className="bg-yellow-400 p-2 rounded-2xl ml-56"
          >
            <UserCircleIcon size="25" color="black" />
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

        <View className="bg-yellow-400 w-90 h-16 rounded-2xl mt-4 mx-2 flex flex-row justify-between">
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="bg-white p-3 rounded-2xl m-2 justify-center"
          >
            <HomeIcon size="25" color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white p-3 rounded-2xl m-2 justify-center"
          >
            <PlusIcon size="25" color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favourite')}
            className="bg-white p-3 rounded-2xl m-2 justify-center"
          >
            <HeartIcon size="25" color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
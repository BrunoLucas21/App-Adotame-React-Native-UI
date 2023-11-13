import { Text, View } from "react-native";
import { themeColors } from "../theme";
import {  } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { animais } from "../components/AnimalData";
import AnimalCards from "../components/AnimalCards";
import VoltarTela from "../components/contents/voltarTela";

export default function FavouriteScreen(props) {
  const item = props.route.params;
  return (
    <View className="flex-1 pt-4" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex mt-4">
        <VoltarTela />
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
      </View>
    </View>
  )
}
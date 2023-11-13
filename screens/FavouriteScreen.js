import { View } from "react-native";
import { themeColors } from "../theme";
import {  } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView, TouchableOpacity } from "react-native";

export default function FavouriteScreen() {
  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity className="bg-yellow-400 p-2 rounded-2xl ml-2 ">
            <ArrowLeftIcon size="24" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
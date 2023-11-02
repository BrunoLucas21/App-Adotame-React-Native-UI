import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function CategoryScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.goBack()} 
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
          </View>
          <Text className="flex text-center top-10 text-white font-semibold text-2xl">Selecione umas das categorias</Text>
      </SafeAreaView>
      <View
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-12 pt-12 top-20"
        >
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('CategoryPets')} className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Cachorros 
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
  
}
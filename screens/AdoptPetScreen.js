import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function AdoptPetScreen() {
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
          <View  className="flex-row justify-center">
            <Image source={require('../assets/images/login.png')} 
            style={{width: 200, height: 200}} />
          </View>
        </SafeAreaView>
    </View>
  )
}
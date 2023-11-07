import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VoltarTela from "../components/contents/voltarTela";

export default function AddPetScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <VoltarTela />
          <View className="flex-row justify-center">
            <Image source={require('../assets/images/login.png')} 
            style={{width: 200, height: 200}} />
          </View>
        </SafeAreaView>

        
    </View>
  )
}
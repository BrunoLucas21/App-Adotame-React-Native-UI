import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export default function VoltarTela() {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-start">
      <TouchableOpacity onPress={()=> navigation.goBack()} 
        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
      >
        <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
    </View>
  )
}
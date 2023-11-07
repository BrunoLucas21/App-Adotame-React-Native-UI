import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { themeColors } from "../theme";
export default function AnimalCards({item}) {
  const navigation = useNavigation();

  return (
    <View style={{ borderRadius: 40, backgroundColor: themeColors.bg, height: 140, width: 140 }}>
      <View style={{ shadowColor: 'black', shadowRadius: 30, shadowOffset: { width: 0, height: 40 }, shadowOpacity: 0.8, marginTop: 15 }} className="flex-row justify-center">
        <Image 
          source={item.imageUrl}
          className="h-40 w-40"
        />
      </View>
      <View className="px-5 flex-1 justify-between mt-5">
        <View className="space-y-3 mt-3">
          <Text className="text-3xl text-slate-700 font-semibold z-10">
            {item.nome}
          </Text>
          <Text className="text-xs text-slate-700 font-semibold z-10">
            {item.idade} 
          </Text>
        </View>
      </View>
    </View>
  )
}
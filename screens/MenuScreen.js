import { Image, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, ListBulletIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function MenuScreen() {
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

        <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-6 pt-8">
          {/* Tela para adicionar os animais */}
          <TouchableOpacity className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Adicionar Pet 
            </Text>
          </TouchableOpacity>
          {/* Tela de animais disponiveis */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Listar Animais 
            </Text>
          </TouchableOpacity>
          {/* Tela de notificações */}
          <TouchableOpacity className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Notificações
            </Text>
          </TouchableOpacity>
          {/* Tela para fazer doações */}
          <TouchableOpacity className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Fazer doações
            </Text>
          </TouchableOpacity>
          {/* Tela para fazer doações */}
          <TouchableOpacity onPress={() => navigation.navigate('AdoptPet')} className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Adotar
            </Text>
          </TouchableOpacity>
          {/* Tela para fazer doações */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')} className="p-4 bg-yellow-400 rounded-2xl mb-3">
            <Text className="text-gray-700 font-semibold text-xl ml-4">
              Fazer Login
            </Text>
          </TouchableOpacity>
        </View>
            
    </View>
  )
}
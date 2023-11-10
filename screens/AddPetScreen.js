import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VoltarTela from "../components/contents/voltarTela";
import { useState } from "react";

export default function AddPetScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState([]);
  const [idade, setIdade] = useState([]);
  const [especie, setEspecie] = useState([]);
  const [desc, setDesc] = useState([]);
  const [img, setImg] = useState([]);

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <VoltarTela />
          <View className="flex-row justify-center">
            <Image source={require('../assets/images/login.png')} 
            style={{width: 200, height: 200}} />
          </View>
        </SafeAreaView>

        <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-8">
          <View className="form space-y-2">
            <TextInput
              placeholder="Digite o nome do animal"
              value={nome}
              onChangeText={(value) => setNome(value)}
              autoCapitalize='none'
              keyboardType='default'
              maxLength={50}
              style={{height:40, marginBottom:20}}
            />
            <TextInput
              placeholder="Digite a idade do animal"
              value={idade}
              onChangeText={(value) => setIdade(value)}
              autoCapitalize='none'
              keyboardType='default'
              maxLength={10}
              style={{height:40, marginBottom:20}}
            />
            <TextInput
              placeholder="Digite a especie do animal"
              value={especie}
              onChangeText={(value) => setEspecie(value)}
              autoCapitalize='none'
              keyboardType='default'
              maxLength={30}
              style={{height:40, marginBottom:20}}
            />
            <TextInput
              placeholder="Digite as características do animal"
              value={desc}
              onChangeText={(value) => setDesc(value)}
              autoCapitalize='none'
              keyboardType='default'
              maxLength={100}
              style={{height:40, marginBottom:20}}
            />
            <TouchableOpacity 
              className="py-3 bg-yellow-400 mx-7 rounded-xl"
              style={{borderWidth:1, borderColor:'#FFF', width: '90%', alignSelf:"center"}}
            >
              <Text className="text-xl font-bold text-center text-gray-700">Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VoltarTela from "../components/contents/voltarTela";
import { useState } from "react";

export default function AdoptPetScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState([]);
  const [nomePet, setNomePet] = useState([]);
  const [email, setEmail] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [endereco, setEndereco] = useState([]);
  const [bairro, setBairro] = useState([]);

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <VoltarTela />
          <View  className="flex-row justify-center">
            <Image source={require('../assets/images/login.png')} 
            style={{width: 200, height: 200}} />
          </View>
        </SafeAreaView>

        <View 
          style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
          className="flex-1 bg-white px-6 pt-8">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="form space-y-2">
              <Text className="text-gray-700 ml-4 text-xl">Informe os dados do animal corretamente</Text>
              <Text className="text-gray-700 ml-4">Home do responsável</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                placeholder="Digite seu nome..."
                value={nome} 
                onChangeText={(value) => setNome(value)}
              />
              <Text className="text-gray-700 ml-4">Nome do Pet</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder="Digite o nome do pet..."
                value={nomePet}
                onChangeText={(value) => setNomePet(value)}
              />
              <Text className="text-gray-700 ml-4">E-mail</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder="Digite seu e-mail..."
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <Text className="text-gray-700 ml-4">Número para Contato</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder="Digite seu telefone..."
                keyboardType='numeric'
                value={telefone}
                onChangeText={(value) => setTelefone(value)}
              />
              <Text className="text-gray-700 ml-4">Endereço</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder="Digite seu endereço..."
                value={endereco}
                onChangeText={(value) => setEndereco(value)}
              />
              <Text className="text-gray-700 ml-4">Bairro</Text>
              <TextInput 
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder="Digite seu bairro..."
                value={bairro}
                onChangeText={(value) => setBairro(value)}
              />
              <TouchableOpacity 
                className="py-3 bg-yellow-400 mx-7 my-2 rounded-xl"
                style={{borderWidth:1, borderColor:'#FFF', width: '100%', alignSelf:"center"}}
              >
                <Text className="text-xl font-bold text-center text-gray-700">Adotar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>  
        </View>
    </View>
  )
}
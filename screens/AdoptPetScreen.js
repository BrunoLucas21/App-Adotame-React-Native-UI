import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
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
            <View className="form space-y-2">
              <Text className="text-xl text-gray-600 font-semibold">Nome Completo</Text>
              <TextInput 
                placeholder="Digite seu nome completo"
                value={nome}
                onChangeText={(value) => setNome(value)}
                autoCapitalize='none'
                keyboardType='default'
                maxLength={100}
              />
              <Text className="text-xl text-gray-600 font-semibold">Nome do Animal</Text>
              <TextInput 
                placeholder="Digite seu nome do animal"
                value={nomePet}
                onChangeText={(value) => setNomePet(value)}
                autoCapitalize='none'
                keyboardType='default'
                maxLength={40}
              />
              <Text className="text-xl text-gray-600 font-semibold">Endereço de E-mail</Text>
              <TextInput 
                placeholder="Digite seu endereço de e-mail"
                value={email}
                onChangeText={(value) => setEmail(value)}
                autoCapitalize='none'
                keyboardType='email-address'
                maxLength={100}
              />
              <Text className="text-xl text-gray-600 font-semibold">Telefone para Contato</Text>
              <TextInput 
                placeholder="Digite seu telefone para contato"
                value={telefone}
                onChangeText={(value) => setTelefone(value)}
                autoCapitalize='none'
                keyboardType='numeric'
                maxLength={11}
              />
              <Text className="text-xl text-gray-600 font-semibold">Endereço Residencial</Text>
              <TextInput 
                placeholder="Digite seu endereço residencial"
                value={endereco}
                onChangeText={(value) => setEndereco(value)}
                autoCapitalize='none'
                keyboardType='default'
                maxLength={150}
              />
              <TouchableOpacity 
                className="py-3 bg-yellow-400 mx-7 rounded-xl"
                style={{borderWidth:1, borderColor:'#FFF', width: '90%', alignSelf:"center"}}
              >
                <Text className="text-xl font-bold text-center text-gray-700">Adotar</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
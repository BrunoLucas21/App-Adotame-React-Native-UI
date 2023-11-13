import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme';
import VoltarTela from '../components/contents/voltarTela';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('responsável@ongcg.com.br');
  const [phone, setPhone] = useState('(83) 9 8765-4321');

  return (
    <View className="flex-1 pt-4" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <VoltarTela />
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-8 mt-4"
      >
        <View className="form space-y-2">
          <Text className="text-3xl text-gray-600">Informações para contato</Text>
          <Text className="text-2xs text-gray-600">E-mail: {email}</Text>
          <Text className="text-2xs text-gray-600">Telefone: {phone}</Text>
        </View>

        <Text className="text-xl text-gray-700 font-bold text-center py-5">Ou</Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/instagram.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/whatsapp.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
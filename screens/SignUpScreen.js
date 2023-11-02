import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
        <SafeAreaView className="flex">
            <View className="flex-row justify-start">
                <TouchableOpacity 
                    onPress={()=> navigation.goBack()}
                    className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                >
                    <ArrowLeftIcon size="20" color="black" />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Image source={require('../assets/images/signup.png')} 
                    style={{width: 165, height: 110}} />
            </View>
        </SafeAreaView>
        <View className="flex-1 bg-white px-8 pt-8"
            style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
        >
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4 text-center">Informe seus dados corretamente</Text>
                <Text className="text-gray-700 ml-4">Nome Completo</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    placeholder='Digite seu nome completo'
                    value={nome}
                    onChangeText={(value) => setNome(value)}
                />
                <Text className="text-gray-700 ml-4">E-mail</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    placeholder='Digite seu e-mail'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <Text className="text-gray-700 ml-4">Senha</Text>
                <TextInput
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                    secureTextEntry
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={(value) => setSenha(value)}
                />
                <TouchableOpacity
                    className="py-3 bg-yellow-400 rounded-xl"
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text className="font-xl font-bold text-center text-gray-700">
                        Registrar-se
                    </Text>
                </TouchableOpacity>
            </View>
            <Text className="text-xl text-gray-700 font-bold text-center py-5">
                Ou
            </Text>
            <View className="flex-row justify-center space-x-12">
                <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                    <Image source={require('../assets/icons/google.png')} 
                        className="w-10 h-10" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                    <Image source={require('../assets/icons/apple.png')} 
                        className="w-10 h-10" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                    <Image source={require('../assets/icons/facebook.png')} 
                        className="w-10 h-10" />
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-center mt-7">
                <Text className="text-gray-500 font-semibold">Já tem conta?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text className="font-semibold text-yellow-500"> Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

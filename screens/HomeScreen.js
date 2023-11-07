import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon, ListBulletIcon, UserIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../components/contents/barraPesquisa';

const categorias = [
  { id: '1', name: 'ONG' },
  { id: '2', name: 'Cachorro' },
  { id: '3', name: 'Gato' },
  { id: '4', name: 'Aves' },
  { id: '5', name: 'Cavalo' },
];

export const animais = [
  { id: '1', name: 'Fred', idade: '2 anos', especie: 'Golden Retrivier', desc: 'Todas as vacinas tomadas, pronto para um novo lar', img: require('../assets/images/pet01.png') },
  { id: '2', name: 'Lucky', idade: '4 anos', especie: 'Maltês', desc: 'Todas as vacinas tomadas, pronto para um novo lar', img: require('../assets/images/pet02.png') },
  { id: '3', name: 'Madona', idade: '5 anos', especie: 'Border Collie', desc: 'Todas as vacinas tomadas, pronto para um novo lar', img: require('../assets/images/pet03.png') },
  { id: '4', name: 'Negona', idade: '5 anos', especie: 'Cão-lobo', desc: 'Todas as vacinas tomadas, pronto para um novo lar', img: require('../assets/images/pet04.png') },
  { id: '5', name: 'Bob', idade: '6 anos', especie: 'Vira-lata', desc: 'Todas as vacinas tomadas, pronto para um novo lar', img: require('../assets/images/pet05.png') },
  { id: '6', name: 'Ninna', idade: '2 anos', especie: 'Siamês', desc: 'Todas as vacinas tomadas, pronto para um novo lar', img: require('../assets/images/pet06.png') },
]

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleNavigationDetails = () => {
    navigation.navigate('Details')
  };

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity className="bg-yellow-400 p-2 rounded-2xl ml-2 ">
            <ListBulletIcon size="24" color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}
            className="bg-yellow-400 p-2 rounded-2xl ml-72">
            <UserIcon size="24" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/images/login.png')}
            style={{ width: 200, height: 200 }} />
        </View>
        <BarraPesquisa />
      </SafeAreaView>

      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-8">
        <View className="font-bold text-zinc-500 ">
          <Text className="text-xl text-gray-700 font-semibold">Selecione uma categória</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Categorias */}
            <View className="flex flex-row justify-center">
              <View className="p-2 mt-2 rounded-2xl">
                <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 mb-4 bg-yellow-400">
                  <Text className="text-gray-700 font-bold">
                    {categorias.map((item) => {
                      if (item.id === '1') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        );
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="p-2 mt-2 rounded-2xl">
                <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 mb-4 bg-yellow-400">
                  <Text className="text-gray-700 font-bold">
                    {categorias.map((item) => {
                      if (item.id === '2') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        );
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="p-2 mt-2 rounded-2xl">
                <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 mb-4 bg-yellow-400">
                  <Text className="text-gray-700 font-bold">
                    {categorias.map((item) => {
                      if (item.id === '3') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        );
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="p-2 mt-2 rounded-2xl">
                <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 mb-4 bg-yellow-400">
                  <Text className="text-gray-700 font-bold">
                    {categorias.map((item) => {
                      if (item.id === '4') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        );
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="p-2 mt-2 rounded-2xl">
                <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 mb-4 bg-yellow-400">
                  <Text className="text-gray-700 font-bold">
                    {categorias.map((item) => {
                      if (item.id === '5') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        );
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          {/* Cards */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row justify-center gap-4">
              <View style={{ backgroundColor: themeColors.bg, height: 320, width: 240, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                <Image style={{ width: 250, height: 250, marginTop: 50 }}
                  source={require('../assets/images/pet01.png')}
                />
                <TouchableOpacity style={{ bottom: 50, padding: 10, borderRadius: 8 }} onPress={handleNavigationDetails}>
                  <Text className="text-center text-white font-bold text-xl">
                    {animais.map((item) => {
                      if (item.id === '1') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        )
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ backgroundColor: themeColors.bg, height: 320, width: 240, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                <Image style={{ width: 250, height: 250 }}
                  source={require('../assets/images/pet02.png')}
                />
                <TouchableOpacity style={{ bottom: 50, padding: 10, borderRadius: 8 }} onPress={handleNavigationDetails}>
                  <Text className="text-center text-white font-bold text-xl">
                    {animais.map((item) => {
                      if (item.id === '2') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        )
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ backgroundColor: themeColors.bg, height: 320, width: 240, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                <Image style={{ width: 250, height: 250 }}
                  source={require('../assets/images/pet03.png')}
                />
                <TouchableOpacity style={{ bottom: 50, padding: 10, borderRadius: 8 }} onPress={handleNavigationDetails}>
                  <Text className="text-center text-white font-bold text-xl">
                    {animais.map((item) => {
                      if (item.id === '3') {
                        return (
                          <>
                            <Text>{item.name}</Text>
                          </>
                        )
                      }
                    })}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

    </View>
  )
}
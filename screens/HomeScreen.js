import { View, TouchableOpacity, Image, ScrollView, FlatList, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon, ListBulletIcon, UserIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../components/contents/barraPesquisa';
import { data } from '../components/contents/dadosAnimais';
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}
            className="bg-yellow-400 p-2 rounded-2xl ml-2 ">
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Categorias */}
          <View className="flex flex-row justify-center">
            <View className="p-2 mt-2 rounded-2xl">
              <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 ml-4 mb-4 bg-yellow-400">
                <Text className="text-gray-700 font-bold">ONGs</Text>
              </TouchableOpacity>
            </View>
            <View className="p-2 mt-2 rounded-2xl">
              <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 ml-4 mb-4 bg-yellow-400">
                <Text className="">Cachorros</Text>
              </TouchableOpacity>
            </View>
            <View className="p-2 mt-2 rounded-2xl">
              <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 ml-4 mb-4 bg-yellow-400">
                <Text className="">Gatos</Text>
              </TouchableOpacity>
            </View>
            <View className="p-2 mt-2 rounded-2xl">
              <TouchableOpacity className="flex items-center justify-center rounded-2xl h-12 w-24 ml-4 mb-4 bg-yellow-400">
                <Text className="">Cavalos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>  
          
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Cards */}
          <View className="space-y-8">
            <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
              <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                <Image
                  source={require('../assets/images/pet01.png')}
                  style={{ width: '100%', height: 140, bottom: 6 }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{ backgroundColor: themeColors.bg }}
                  className="flex items-center justify-center rounded-2xl h-12 w-24 ml-56 bottom-24">
                  <Text className="text-white font-bold text-center justify-center">Visualizar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl shadow-xl">
              <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                <Image
                  source={require('../assets/images/pet02.png')}
                  style={{ width: '100%', height: 140, bottom: 6 }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{ backgroundColor: themeColors.bg }}
                  className="flex items-center justify-center rounded-2xl h-12 w-24 ml-56 bottom-20">
                  <Text className="text-white font-bold text-center justify-center">Visualizar</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
              <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                <Image
                  source={require('../assets/images/pet03.png')}
                  style={{ width: '100%', height: 140, bottom: 6 }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{ backgroundColor: themeColors.bg }}
                  className="flex items-center justify-center rounded-2xl h-12 w-24 ml-56 bottom-20">
                  <Text className="text-white font-bold text-center justify-center">Visualizar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
              <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                <Image
                  source={require('../assets/images/pet04.png')}
                  style={{ width: '100%', height: 140, bottom: 6 }}
                />
                <TouchableOpacity style={{ backgroundColor: themeColors.bg }}
                  className="flex items-center justify-center rounded-2xl h-12 w-24 ml-56 bottom-20">
                  <Text className="text-white font-bold text-center justify-center">Visualizar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
              <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                <Image
                  source={require('../assets/images/pet05.png')}
                  style={{ width: '100%', height: 140, bottom: 6 }}
                />
                <TouchableOpacity style={{ backgroundColor: themeColors.bg }}
                  className="flex items-center justify-center rounded-2xl h-12 w-24 ml-56 bottom-20">
                  <Text className="text-white font-bold text-center justify-center">Visualizar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
              <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                <Image
                  source={require('../assets/images/pet06.png')}
                  style={{ width: '100%', height: 140, bottom: 6 }}
                />
                <TouchableOpacity style={{ backgroundColor: themeColors.bg }}
                  className="flex items-center justify-center rounded-2xl h-12 w-24 ml-56 bottom-20">
                  <Text className="text-white font-bold text-center justify-center">Visualizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
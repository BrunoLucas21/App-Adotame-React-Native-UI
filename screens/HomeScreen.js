import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, ArrowRightIcon, InboxIcon, ListBulletIcon, QueueListIcon, UserIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Searchbar } from 'react-native-paper'
import { AnimalsData } from '../components/AnimalsData'

export default function HomeScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState();
  const onChangeSearch = query => setSearch(query);
  const data = AnimalsData;

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.navigate('Menu')} 
            className="bg-yellow-400 p-2 rounded-2xl ml-2 ">
              <ListBulletIcon size="24" color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} 
            className="bg-yellow-400 p-2 rounded-2xl ml-72">
              <UserIcon size="24" color="black" />
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
            <View className="space-y-4">
            {/* Barra de pesquisa */}
            <Searchbar 
              placeholder='Pesquisar um animal...'
              iconColor="#374151"
              value={search}
              onChangeText={onChangeSearch}
              onSubmitEditing={() => console.log('submit')}
            />

            {/* Categórias */}
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-2">
                <TouchableOpacity className="bg-yellow-400 p-4 m-2 rounded-2xl">
                  <Text className="text-center justify-center p-1 font-bold">Cachorros</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="bg-yellow-400 p-4 m-2 rounded-2xl">
                  <Text className="text-center justify-center p-1 font-bold">Gatos</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-yellow-400 p-4 m-2 rounded-2xl">
                  <Text className="text-center justify-center p-1 font-bold">Coelhos</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-yellow-400 p-4 m-2 rounded-2xl">
                  <Text className="text-center justify-center p-1 font-bold">Cavalos</Text>
                </TouchableOpacity>

                  <TouchableOpacity className="bg-yellow-400 p-4 m-2 rounded-2xl">
                    <Text className="text-center justify-center p-1 font-bold">Pássaros</Text>
                  </TouchableOpacity>
              </ScrollView>
            </View>

            {/* Cards */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="space-y-8">
                <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
                  <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                    <Image 
                      source={require('../assets/images/pet01.png')}
                      style={{width: '100%', height: 140, bottom: 6}}
                    />
                    <Text className="flex text-center justify-between bottom-12 text-white font-bold">
                      {data.animals.map((item) => (
                        <AnimalsData 
                          key={item.id}
                          name={item.nome}
                          age={item.idade}
                        />
                      ))}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{backgroundColor: themeColors.bg}} 
                    className="flex items-center justify-center rounded-2xl h-12 w-12 ml-64 bottom-24">
                      <ArrowRightIcon size="24" color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl shadow-xl">
                  <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                    <Image 
                      source={require('../assets/images/pet02.png')}
                      style={{width: '100%', height: 140, bottom: 6}}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{backgroundColor: themeColors.bg}} 
                    className="flex items-center justify-center rounded-2xl h-12 w-12 ml-64 bottom-20">
                      <ArrowRightIcon size="24" color="white" />
                    </TouchableOpacity>
                  </View>
                  
                </View>

                <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
                  <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                    <Image 
                      source={require('../assets/images/pet03.png')}
                      style={{width: '100%', height: 140, bottom: 6}}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{backgroundColor: themeColors.bg}} 
                    className="flex items-center justify-center rounded-2xl h-12 w-12 ml-64 bottom-20">
                      <ArrowRightIcon size="24" color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
                  <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                    <Image 
                      source={require('../assets/images/pet04.png')}
                      style={{width: '100%', height: 140, bottom: 6}}
                    />
                    <TouchableOpacity style={{backgroundColor: themeColors.bg}} 
                    className="flex items-center justify-center rounded-2xl h-12 w-12 ml-64 bottom-20">
                      <ArrowRightIcon size="24" color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-gray-200 h-28 w-58 p-2 mt-2 rounded-2xl">
                  <View className="objetc-none object-left-top bg-yellow-400 h-32 w-32 rounded-2xl bottom-4">
                    <Image 
                      source={require('../assets/images/pet05.png')}
                      style={{width: '100%', height: 140, bottom: 6}}
                    />
                    <Text className="flex text-center justify-center">
                      {AnimalsData.animals.map((item) => item.nome.toLowerCase())}
                    </Text>
                    <TouchableOpacity style={{backgroundColor: themeColors.bg}} 
                    className="flex items-center justify-center rounded-2xl h-12 w-12 ml-64 bottom-20">
                      <ArrowRightIcon size="24" color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  {/* rodapé */}
                </View>
              </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
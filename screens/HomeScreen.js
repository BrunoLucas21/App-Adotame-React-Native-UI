import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon, ListBulletIcon, UserIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { data } from '../components/contents/dadosAnimais';
import { categorias } from '../components/contents/categorias';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState();
  const [ativo, setAtivo] = useState(1);
  const onChangeSearch = query => setSearch(query);

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
            <View className="px-5 mt-6">
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categorias}
                keyExtractor={item => item.id}
                className="overflow-visible"
                renderItem={({item}) => {
                  ativo = item.id == ativo;
                  let textoAtivadoClass = ativo? 'text-white' : 'text-gray-700'
                  return (
                    <TouchableOpacity onPress={() => setAtivo(item.id)}
                      style={{backgroundColor: ativo? themeColors.bgLight: '#000000'}}
                      className="p-4 px-5 mr-2 rounded-full shadow"
                    >
                      <Text className={"font-semibold " + textoAtivadoClass}>{item.title}</Text>
                    </TouchableOpacity>
                  )
                }}
                />
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
                      {data.map((item) => (
                        item.nome
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
                      {data.map((item) => item.nome.toLowerCase())}
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
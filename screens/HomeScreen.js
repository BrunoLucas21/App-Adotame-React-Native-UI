import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon, ListBulletIcon, UserIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import BarraPesquisa from '../components/contents/barraPesquisa';
import { animais } from '../components/AnimalData';
import { categorias } from '../components/AnimalCategoria';
import { FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AnimalCards from '../components/AnimalCards';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [categoria, setCategoria] = useState();
  const [categoriaAtivado, setCategoriaAtivado] = useState(1);

  const handleNavigationDetails = () => {
    // TODO: quando o usuário clicar em uma das categorias, ele verá os detalhes do animal que foi selecionado
    navigation.navigate('Details');
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
        <BarraPesquisa />
      </SafeAreaView>

      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-8">
          <Text className="text-xl text-gray-700 font-semibold">Selecione uma categória</Text>
          
          {/* Categorias */}
          <View className="mt-4">
            <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categorias}
              keyExtractor={item => item.id}
              className="overflow-visible"
              renderItem={({ item }) => {
                let ativado = item.id == categoriaAtivado;
                let ativadoTextoClass = ativado? 'text-white' : 'text-gray-700'
                return (
                  <TouchableOpacity
                    onPress={() => setCategoriaAtivado(item.id)}
                    style={{ backgroundColor: ativado? themeColors.bgLight: 'rgba(0,0,0,0.07)' }}
                    className="p-4 px-5 rounded-full mr-2 shadow"
                  >
                    <Text className={"font-semibold" + ativadoTextoClass}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>

          {/* Animals Cards */}
          <View className="mt-12 py-2">
            <Carousel 
              containerCustomStyle={{ overflow: 'visible' }}
              data={animais}
              loop={true}
              renderItem={({ item }) => <AnimalCards item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={260}
              slideStyle={{display: 'flex', alignItems: 'center'}}
            />
          </View>
        </View>
    </View>
  )
}
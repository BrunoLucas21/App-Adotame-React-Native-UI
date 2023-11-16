import { Image, ImageBackground, Text, View } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, HeartIcon, HomeIcon, PlusIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen(props) {
  const navigation = useNavigation();
  const item = props.route.params;
  return (
    <View className="flex-1 mt-4" style={{ backgroundColor: themeColors.bg }}>
      <View
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      >
        <Image
          source={require('../assets/images/image-background.png')}
          style={{ width: '100%', height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, }}
        />
      </View>
      <SafeAreaView className="space-y-8">
        <View className="flex-row justify-start p-5">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-2xl -ml-2 w-10 items-center justify-center"
          >
            <ArrowLeftIcon size="25" color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favourite')}
            className="bg-yellow-400 p-2 rounded-2xl w-10 ml-72 items-center justify-center">
            <HeartIcon size="25" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={item.img} className="h-60 w-60" />
        </View>
      </SafeAreaView>

      <View
        className="flex bg-white rounded-3xl"
        style={{ width: '100%', height: 365 }}
      >
        <Text className="text-gray-700 font-bold m-4 text-3xl p-2 text-center justify-center">{item.name}</Text>
        <Text className="text-gray-700 font-semibold text-lg mb-4 text-center justify-center">{item.idade}</Text>
        <Text className="text-gray-700 font-semibold text-lg mb-4 text-center justify-center">{item.especie}</Text>
        <Text className="text-gray-700 font-semibold text-lg mb-4 text-center justify-center">{item.sexo}</Text>
        <Text className="text-gray-700 font-semibold text-lg mb-4 text-center justify-center">{item.desc}</Text>

        <TouchableOpacity 
          onPress={() => navigation.navigate('AdoptPet')}
          className="py-3 bg-yellow-400 rounded-xl mx-4">
          <Text className="text-xl font-bold text-center text-gray-700">Adotar {item.name}</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-yellow-400 w-90 h-16 rounded-2xl mt-4 mx-2 flex flex-row justify-between">
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="bg-white p-3 rounded-2xl m-2 justify-center"
        >
          <HomeIcon size="25" color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white p-3 rounded-2xl m-2 justify-center"
        >
          <PlusIcon size="25" color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favourite')}
          className="bg-white p-3 rounded-2xl m-2 justify-center"
        >
          <HeartIcon size="25" color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import VoltarTela from '../components/contents/voltarTela';
import { themeColors } from '../theme';
import { data } from '../components/contents/dadosAnimais';

export default function DetailsScreen() {
  return (
    <View className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <VoltarTela />
          <View  className="flex-row justify-center">
            {data.map((item) => {
              if (item.id === 1) {
                return (
                  <Image source={require('../assets/images/pet01.png')} 
                    style={{width: 350, height: 350}} 
                  />
                )
              }
            })}
          </View>
        </SafeAreaView>

        <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-6 pt-8">
          <View className="space-x-2 space-y-2">
            {data.map((item) => item.nome)}
          </View>
        </View>
    </View>
  )
}
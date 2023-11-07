import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import VoltarTela from '../components/contents/voltarTela';
import { themeColors } from '../theme';
import { data } from '../components/contents/dadosAnimais';
import { animais } from './HomeScreen';

export default function DetailsScreen() {
  return (
    <View className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <VoltarTela />
          <View  className="flex-row justify-center">
            {animais.map((item) => item.img)}
          </View>
        </SafeAreaView>

        <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-6 pt-8">
          <View className="space-x-2 space-y-2">
            
          </View>
        </View>
    </View>
  )
}
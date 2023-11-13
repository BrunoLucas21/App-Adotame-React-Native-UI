import { Image, ImageBackground, Text, View } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import VoltarTela from '../components/contents/voltarTela';
import { HeartIcon } from 'react-native-heroicons/solid';

export default function DetailsScreen(props) {
  const item = props.route.params;
  return (
    <View className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <Image source={require('../assets/images/background.png')} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4">
        <VoltarTela />
        <TouchableOpacity className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
          <HeartIcon size="20" color="white" />
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Image source={item.img} className="h-60 w-60" />
        </View>
      </SafeAreaView>
    </View>
  )
}
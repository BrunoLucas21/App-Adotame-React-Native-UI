import { Image, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={()=> navigation.goBack()} 
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
              <ArrowLeftIcon size="20" color="black" />
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
          
        </View>
    </View>
  )
}
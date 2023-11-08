import { Image, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import VoltarTela from '../components/contents/voltarTela';
import { themeColors } from '../theme';
import { animais } from './HomeScreen';

export default function DetailsScreen() {
  return (
    <View className="flex-1" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
        <VoltarTela />
          <View  className="flex-row justify-center">
            {
              animais.map((item) => {
                if (item.id === '1') {
                  return (
                    <View style={{ height: 350, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                      <Image source={item.img} style={{width: '100%', height: '100%', borderRadius: 8}} resizeMode='cover' />
                    </View>
                  )
                } else {
                  return null;
                }
              })
            }
          </View>
        </SafeAreaView>
        <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-8">
          <Text className="font-bold" style={{fontSize: 20}}>
            {animais.map((item) => {
              if (item.id === '1') {
                return item.name;
              } else {
                return null;
              }
            })}
          </Text>
        </View>
    </View>
  )
}
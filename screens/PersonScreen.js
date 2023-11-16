import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';

export default function PersonScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-around">
          <TouchableOpacity onPress={()=> navigation.goBack()} 
            className="bg-yellow-400 p-2 rounded-2xl"
          >
            <ArrowLeftIcon size="32" color="black" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-yellow-400 p-2 rounded-2xl ml-64">
            <UserCircleIcon size="32" color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-6 pt-6 mt-4"
      >

      </View>
    </View>
  )
}
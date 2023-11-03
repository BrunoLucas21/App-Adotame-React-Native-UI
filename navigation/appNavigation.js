import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AdoptPetScreen from '../screens/AdoptPetScreen';
import CategoryScreen from '../screens/CategoryScreen';
import MenuScreen from '../screens/MenuScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddPetScreen from '../screens/AddPetScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="AdoptPet" options={{headerShown: false}} component={AdoptPetScreen} />
        <Stack.Screen name="CategoryPets" options={{headerShown: false}} component={CategoryScreen} />
        <Stack.Screen name="Menu" options={{headerShown: false}} component={MenuScreen} />
        <Stack.Screen name="Details" options={{headerShown: false}} component={DetailsScreen} />
        <Stack.Screen name="AddPet" options={{headerShown: false}} component={AddPetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
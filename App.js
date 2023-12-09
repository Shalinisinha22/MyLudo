import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import My from './components/LudoBoard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimerScreen from './Screens/TimerScreen';
import LudoBoard from './components/LudoBoard';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <SafeAreaView

        style={{
          paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          backgroundColor: "white",

        }}
      >
        <StatusBar
          backgroundColor={"white"}
          barStyle={"dark-content"}
          translucent={false}
         />
        <Stack.Navigator>
          <Stack.Screen name="LoadingScreen" component={TimerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LudoBoard" component={LudoBoard} options={{ headerShown: false }} />
        </Stack.Navigator>

      </SafeAreaView>  
    </NavigationContainer>



  )
}

export default App








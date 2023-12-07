import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import React from 'react'
import My from './components/LudoBoard';


const App = () => {
  return (
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
    <My></My>
   
    
    </SafeAreaView>
  

  )
}

export default App








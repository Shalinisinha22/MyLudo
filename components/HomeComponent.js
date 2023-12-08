import { View, Text } from 'react-native'
import React from 'react'

const HomeComponent = () => {
  return (

 <View style={{left:25, top:54.5}}>
 <View style={{width: 0,
  height: 0,
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderLeftWidth: 38,
  borderRightWidth: 39,
  borderBottomWidth: 38,
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "#ec1d27",
  transform: [{ rotate: "90deg" }],
  top:20,
  left:-18
 }}>
</View>

<View style={{width: 0,
  height: 0,
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderLeftWidth: 38,
  borderRightWidth: 39,
  borderBottomWidth: 38,
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "#ffe01b",
  transform: [{ rotate: "-90deg" }],
  top:-20,
  right:-19
 }}>
</View>

<View style={{width: 0,
  height: 0,
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderLeftWidth: 38,
  borderRightWidth: 40 ,
  borderBottomWidth: 38,
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "#29b6f6",
  // transform: [{ rotate: "0deg" }],
  top:-38,
  left:0
 }}>
</View>

<View style={{width: 0,
  height: 0,
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderLeftWidth: 38,
  borderRightWidth: 37,
  borderBottomWidth: 38,
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "#01A147",
  transform: [{ rotate: "-180deg" }],
  top:-113.3,
  left:1
 }}>
</View>

</View> 


  )
}

export default HomeComponent
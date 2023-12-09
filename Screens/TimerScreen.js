import { View, Text , Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'

const TimerScreen = ({navigation}) => {
    const {height, width} = Dimensions.get("screen")
    const [count, setCount] = useState(5)

    useEffect(()=>{
        if (count <= 0){
          navigation.navigate("LudoBoard")
        }
        else{
            setTimeout(()=>{
                setCount(count - 1)
            },2000)
        }
      
    })
  return (
  <View style={{height:height, width:width, backgroundColor:"#03045e", flex:1,  alignItems:"center", paddingTop:280}}>
      <Text style={{color:"#ffc300", fontSize:70}}>{count}</Text>
      <Text style={{color:"#ffc300", fontSize:40}}>Ludo Moon Star</Text>
  </View>
  )
}

export default TimerScreen
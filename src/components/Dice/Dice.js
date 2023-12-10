import React, {useState, useRef, useEffect} from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import { colors } from '../../util/Colors';
import { BLUE, GREEN, RED, YELLOW } from '../../util/Constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default Dice = ({isRolling,turn,onDiceRoll,diceNumber, rollingRotation}) => {
    // const [diceValue, setDiceValue] = useState(1);
    const rollingSound = useRef(new Audio.Sound());
    const rollingValue = useRef(new Animated.Value(0)).current;
    // const rollingRotation = rollingValue.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: ['0deg', '360deg'],
    //   });

    
  useEffect(() => {
    loadSound();

    return () => {

      unloadSound();
    };
  }, []);

  const loadSound = async () => {
    try {
      await rollingSound.current.loadAsync(require('../../../assets/diceSound.mp3'));
    } catch (error) {
      console.error('Failed to load the sound', error);
    }
  };

  const unloadSound = async () => {
    try {
      await rollingSound.current.unloadAsync();
    } catch (error) {
      console.error('Failed to unload the sound', error);
    }
  };

  const rollDice = async () => {

    try {
      await rollingSound.current.replayAsync();
    } catch (error) {
      console.error('Failed to play the sound', error);
    }
  

    rollingValue.setValue(0);
    Animated.timing(rollingValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    await new Promise(resolve => setTimeout(resolve, 1500));

    await new Promise(resolve => setTimeout(resolve, 1500));
   

  };

  
    const { red,blue,yellow,green } = colors
    let color = turn === RED?red:turn === YELLOW? yellow:turn === GREEN? green: turn=== BLUE?blue:undefined;
    const renderSurfaceOne = () =>{
        return (
            // <View style={styles.diceDot}/>
            <FontAwesome5 name="dice-one" size={54} color="#fdfffc" />
        )
    }
    const renderSurfaceTwo = () =>{
        return (
            // <View>
            // <View style={styles.diceDot}/>
            // <View style={styles.diceDot}/>
            // </View>
            <FontAwesome5 name="dice-two" size={54} color="#fdfffc" />
        )
    }
    const renderSurfaceThree = () =>{
        return (
            // <View>
            // <View style={styles.diceDot}/>
            // <View style={styles.diceDot}/>
            // <View style={styles.diceDot}/>
            // </View>
            <FontAwesome5 name="dice-three" size={54} color="#fdfffc" />
        )
    }
    const renderSurfaceFour = () =>{
        return (
            // <View style={{flexDirection:'row',alignSelf:'center'}}>
            //     {renderSurfaceTwo()}
            //     {renderSurfaceTwo()}
            // </View>
            <FontAwesome5 name="dice-four" size={54} color="#fdfffc" />
        )
    }
    const renderSurfaceFive = () =>{
        return (
            // <View style={{flexDirection:'row',alignSelf:'center'}}>
            //     {renderSurfaceTwo()}
            //     {renderSurfaceOne()}
            //     {renderSurfaceTwo()}
            // </View>
            <FontAwesome5 name="dice-five" size={54} color="#fdfffc" />
        )
    }
    const renderSurfaceSix = () =>{
        return (
            // <View style={{flexDirection:'row',alignSelf:'center'}}>
            //     {renderSurfaceThree()}
            //     {renderSurfaceThree()}
            // </View>
            <FontAwesome5 name="dice-six" size={54} color="#fdfffc" />
        )
    }
    const renderDiceSurface = (diceNumber) =>{
        console.log(diceNumber)
        switch(diceNumber){
            case 1:
            return renderSurfaceOne();
            case 2: 
            return renderSurfaceTwo();
            case 3: 
            return renderSurfaceThree();
            case 4: 
            return renderSurfaceFour();
            case 5: 
            return renderSurfaceFive();
            case 6: 
            return renderSurfaceSix();
        }
    }
    return (
   
     
      
        <View>

<View style={styles.textStyle}>
<View
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 39,
              borderRightWidth: 39.5,
              borderBottomWidth: 39,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "#ec1d27",
              transform: [{ rotate: "90deg" }],
              top: 19,
              left: -19,
            }}
          ></View>

          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 39,
              borderRightWidth: 39.5,
              borderBottomWidth: 39,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "#ffe01b",
              transform: [{ rotate: "-90deg" }],
              top: -20,
              right: -20,
            }}
          ></View>

          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 38,
              borderRightWidth: 43 ,
              borderBottomWidth: 38,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "#29b6f6",
              // transform: [{ rotate: "0deg" }],
              top: -39,
              left: 1,
            }}
          ></View>

          <View
            style={{
              width: 0,
              height: 0,
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderLeftWidth: 39,
              borderRightWidth: 37,
              borderBottomWidth: 39,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "#01A147",
              transform: [{ rotate: "-180deg" }],
              top: -116,
              left: 2,
            }}
          ></View>
</View>

<Animated.View
    style={[
        styles.textStyle,
    
      {
        transform: [{ rotate:rollingRotation }],
        marginTop:12
      },
    ]}
  >
    <TouchableOpacity onPress={onDiceRoll}>{renderDiceSurface(diceNumber)}</TouchableOpacity>
  </Animated.View>
      
            {/* <Text style={styles.textStyle}>Roll Dice</Text> */}
            {/* <TouchableOpacity style={[styles.container,{backgroundColor:color}]} onPress={onDiceRoll}>
            {renderDiceSurface(diceNumber)}
            
            </TouchableOpacity>
            {isRolling && <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
            
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        position:'absolute',
        alignSelf:'center',
        marginTop: 0,
    },
    diceDot:{
        backgroundColor:colors.white,
        alignSelf:'center',
        width: 6,
        height: 6,
        borderRadius: 3,
        margin:2
    },
    container:{
        position:'absolute',
        marginTop:20,
        // alignSelf:'center',
        // justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'#000'
    }
})
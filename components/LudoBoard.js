import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity, Image, Platform, StatusBar, Animated } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Arrow from './Svg/Arrow1';
import RedGoti from './Svg/RedGoti';
import GreenGoti from './Svg/GreenGoti';
import YellowGoti from './Svg/YellowGoti';
import BlueGoti from './Svg/BlueGoti';
import HomeComponent from './HomeComponent';
import { Audio } from 'expo-av';
import ReadyRed from './Svg/ReadyRed';
import ReadyGreen from './Svg/ReadyGreen';
import ReadyYellow from './Svg/ReadyYellow';
import ReadyBlue from './Svg/ReadyBlue';
import Arrow1 from './Svg/Arrow1';
import Arrow2 from './Svg/Arrow2';
import Arrow3 from './Svg/Arrow3';





const LudoBoard = () => {
  const numRows = 15;
  const numCols = 15;
  const [isIconMoved, setIconMoved] = useState(false);
  const [iconPosition, setIconPosition] = useState({ row: 2, col: 2 });

  const [diceValue, setDiceValue] = useState(1);
  const rollingValue = useRef(new Animated.Value(0)).current;

  const [tappedRedGoti, setTappedRedGoti] = useState(null);

  const [rolling, setRolling] = useState(false);
  const diceRef = useRef(null);
  const rollingSound = useRef(new Audio.Sound());


  const [playersInfo, setPlayerInfo] = useState("red")

  const isRedMark = (row, col) => {
    if (row === 6 && col === 1) {
      return <ReadyRed></ReadyRed>
    }
  }

  // const handleIconPress = () => {
  //   if (!isIconMoved) {
  //     setIconMoved(true);
  //     // You can add any other logic you need before moving the icon

  //     // Move the icon to the new cell (6, 1)
  //     setIconPosition({ row: 6, col: 1 });
  //   }
  // };


  useEffect(() => {
    loadSound();

    return () => {

      unloadSound();
    };
  }, []);

  const loadSound = async () => {
    try {
      await rollingSound.current.loadAsync(require('../assets/diceSound.mp3'));
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


    // setRolling(true);

   
    // await new Promise(resolve => setTimeout(resolve, 1500));
   
    // const randomValue = Math.floor(Math.random() * 6) + 1;
    // setDiceValue(randomValue)

  

    // setRolling(false);

  

    rollingValue.setValue(0);
    Animated.timing(rollingValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    await new Promise(resolve => setTimeout(resolve, 1500));
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
    // moveIcon(randomValue);
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (randomValue === 6) {

      setPlayerInfo("red")
    }
    else {
      setPlayerInfo("green")
    }

  };


  // const moveIcon = (steps) => {
  //   setIconMoved(true);

  //   // Calculate the new position based on the steps
  //   let newRow = iconPosition.row;
  //   let newCol = iconPosition.col + steps;

  //   // Update the column and handle when the token reaches the end of the row
  //   if (newCol > 4) {
  //     newRow = newRow + 1;
  //     newCol = newCol - 4;
  //   }

  //   // Move the icon to the new position
  //   setIconPosition({ row: newRow, col: newCol });
  // };


  const rollDiceGreen = async () => {

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
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (randomValue === 6) {

      setPlayerInfo("green")
    }
    else {
      setPlayerInfo("yellow")
    }

  };


  const rollDiceYellow = async () => {

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
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (randomValue === 6) {

      setPlayerInfo("yellow")
    }
    else {
      setPlayerInfo("blue")
    }

};

  const rollDiceBlue = async () => {
    console.log(playersInfo)
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
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (randomValue === 6) {

      setPlayerInfo("blue")
    }
    else {
      setPlayerInfo("red")
    }

  };


  const rollingRotation = rollingValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const renderDiceIcons = () => {
    console.log(diceValue)
    if (diceValue == 1) {
      return <FontAwesome5 name="dice-one" size={54} color="#fdfffc" />
    }

    if (diceValue == 2) {
      return <FontAwesome5 name="dice-two" size={54} color="#fdfffc" />
    }

    if (diceValue == 3) {
      return <FontAwesome5 name="dice-three" size={54} color="#fdfffc" />
    }

    if (diceValue == 4) {
      return <FontAwesome5 name="dice-four" size={54} color="#fdfffc" />
    }

    if (diceValue == 5) {
      return <FontAwesome5 name="dice-five" size={54} color="#fdfffc" />
    }


    if (diceValue == 6) {
      return <FontAwesome5 name="dice-six" size={54} color="#fdfffc" />
    }

  };

  // const handleRedGotiPress = (row, col) => {
  //   if (diceValue === 6 && isRedGotiTargetCell(row, col)) {
  //     setTappedRedGoti({ row, col });
  //     putRedGoti(6,1)

  //   }
  // };
  //svg goti
  const isRedGotiTargetCell = (row, col) => {
    return (row === 2 && col === 2) || (row === 2 && col === 4) || (row === 4 && col === 2) || (row === 4 && col === 4);
  };


  const renderRedGotiSvgIcon = (row, col) => {
   // Check if the current cell is a valid target cell for the RedGoti
  const isValidTargetCell = isRedGotiTargetCell(row, col);

  // Check if the RedGoti should be rendered in the current cell
  const shouldRenderRedGoti =
    isValidTargetCell   || (isIconMoved && row === iconPosition.row && col === iconPosition.col);;

  

  if (shouldRenderRedGoti) {
    return (
      <RedGoti
        key={{ row, col }}
        player={playersInfo}
        value={diceValue}
       
      />
    );
  }

  return null;
  };
  // const renderRedGotiSvgIcon = (row, col) => {
  //   if (isRedGotiTargetCell(row, col)) {
  //     return (

  //         <RedGoti key={{row,col}} player ={playersInfo} value = {diceValue} ></RedGoti>
            

  //       //  <TouchableOpacity onPress={() => handleRedGotiPress(row, col)}>
  //       //        {diceValue === 6 && tappedRedGoti?.row === row && tappedRedGoti?.col === col ? null : <RedGoti />}
  //       //      </TouchableOpacity> 



  //     )
  //   }
  //   // return null;
  // };

  // const putRedGoti =(row, col)=>{
  //   if ( row === 6 && col === 1 ){
  //     return <View><RedGoti></RedGoti></View>
  //   }
  // }

  // const renderRedGotiSvgIcon = (row, col) => {


  //   if (isRedGotiTargetCell(row, col)) {
  //     return ( 
  //     diceValue === 6 ?<ReadyRed></ReadyRed>  :  <RedGoti></RedGoti> 

  //     );
  //   }
  //   return null;
  // };

  const isGreenGotiTargetCell = (row, col) => {
    return (row === 2 && col === 11) || (row === 2 && col === 13) || (row === 4 && col === 11) || (row === 4 && col === 13);
  };

  const renderGreenGotiSvgIcon = (row, col) => {
    if (isGreenGotiTargetCell(row, col)) {
      return (
         <GreenGoti player ={playersInfo} value = {diceValue}></GreenGoti>
      );
    }
    return null;
  };


  const isYellowGotiTargetCell = (row, col) => {
    return (row === 11 && col === 11) || (row === 11 && col === 13) || (row === 13 && col === 11) || (row === 13 && col === 13);
  };

  const renderYellowGotiSvgIcon = (row, col) => {
    if (isYellowGotiTargetCell(row, col)) {
      return (
    <YellowGoti player ={playersInfo} value = {diceValue}></YellowGoti>
      );
    }
    return null;
  };


  const isBlueGotiTargetCell = (row, col) => {
    return (row === 11 && col === 2) || (row === 11 && col === 4) || (row === 13 && col === 2) || (row === 13 && col === 4);
  };

  const renderBlueGotiSvgIcon = (row, col) => {
    if (isBlueGotiTargetCell(row, col)) {
      return (
       <BlueGoti player = {playersInfo} value = {diceValue}></BlueGoti>
      );
    }
    return null;
  };

 



  return (

    <View style={{ flex: 1, backgroundColor: "white" }}>

      <ImageBackground source={require("../assets/bj.png")} style={{ flex: 1 }}>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

          <View style={styles.gridContainer}>

            {Array.from({ length: numRows }).map((_, rowIndex) => (
              <View key={rowIndex} style={styles.gridRow}>
                {Array.from({ length: numCols }).map((_, colIndex) => (
                  <View
                    key={colIndex}
                    style={[
                      styles.gridCell,
                      isStarCell(rowIndex, colIndex) && styles.starCell,
                      
                      { backgroundColor: isCellColored(rowIndex, colIndex) },
                      removeInnerCellGrid(rowIndex, colIndex) ? styles.removeGrid
                        : null,

                      isCellInRange6(rowIndex, colIndex) ? styles.red
                        : null,
                
                      isCellInRange9(rowIndex, colIndex) ? styles.green
                        : null,
                      isCellInRange7(rowIndex, colIndex) ? styles.blue
                        : null,
                      isCellInRange8(rowIndex, colIndex)
                        ? styles.yellow
                        : null,

                      isCellInRange10(rowIndex, colIndex) ? styles.home
                        : null,

                      ,


                    ]}
                  >


                    <Text style={{ width: "23", height: "25", justifyContent: "center", alignItems: "center" ,zIndex:0}}> {isStarCell(rowIndex, colIndex) && (
                      <Ionicons name="star" size={14} color="white" />
                    )}</Text>


                    {isRedCircleCell(rowIndex + 1, colIndex + 1) && (
                      <View style={styles.circle} />
                    )}
                    {isGreenCircleCell(rowIndex + 1, colIndex + 1) && (
                      <View style={[styles.circle, { backgroundColor: "#01A147" }]} />
                    )}

                    {isYellowCircleCell(rowIndex + 1, colIndex + 1) && (
                      <View style={[styles.circle, { backgroundColor: "#ffe01b" }]} />
                    )}

                    {isBlueCircleCell(rowIndex + 1, colIndex + 1) && (
                      <View style={[styles.circle, { backgroundColor: "#29b6f6" }]} />
                    )}



                    {redArrowCell(rowIndex, colIndex) && (


                      <Entypo name="arrow-long-right" size={20} color="red" style={{ marginTop: -16 }} />


                    )}

                    {greenArrowCell(rowIndex, colIndex) && (


                      <Entypo name="arrow-long-down" size={20} color="green" style={{ marginTop: -16 }} />


                    )}

                    {yellowArrowCell(rowIndex, colIndex) && (


                      <Entypo name="arrow-long-left" size={20} color="#ffe01b" style={{ marginTop: -16 }} />


                    )}

                    {blueArrowCell(rowIndex, colIndex) && (


                      <Entypo name="arrow-long-up" size={20} color="#29b6f6" style={{ marginTop: -16 }} />


                    )}

                    {/* {renderHomeText(rowIndex, colIndex)} */}


                    {renderHomeComponent(rowIndex, colIndex)}

                    {renderRedGotiSvgIcon(rowIndex + 1, colIndex + 1)}

                    {renderGreenGotiSvgIcon(rowIndex + 1, colIndex + 1)}

                    {renderYellowGotiSvgIcon(rowIndex + 1, colIndex + 1)}

                    {renderBlueGotiSvgIcon(rowIndex + 1, colIndex + 1)}

{
  isRedMark(rowIndex + 1, colIndex + 1)
}


                    






                  </View>



                ))}



              </View>
            ))}
          </View>


        </View>

        {/* <Arrow></Arrow> */}


        <View style={styles.redGotiBox}>

          <RedGoti></RedGoti>

        </View>
        <View style={styles.greenGotiBox}>
          <GreenGoti></GreenGoti>
        </View>
        <View style={styles.blueGotiBox}>
          <BlueGoti></BlueGoti>
        </View>
        <View style={styles.yellowGotiBox}>
          <YellowGoti></YellowGoti>
        </View>


        <View style={styles.redDice}>
          <View style={styles.diceBtn1}>

            {playersInfo == "red" && 
            
            <Animated.View

            // animation={rolling ? 'rotate' : null}
            // easing="linear"
            // duration={rolling ? 1000 : 0} 
            // onAnimationEnd={() => setRolling(false)}


              style={[

                {
                  transform: [{ rotate: rollingRotation }],
                },
              ]}
           
            >
           <TouchableOpacity onPress={rollDice}>{renderDiceIcons()}</TouchableOpacity>
          </Animated.View>}


            {/* <Animatable.View
           
        animation={rolling ? 'rotate' : null}
        easing="linear"
        duration={rolling ? 1000 : 0} 
        onAnimationEnd={() => setRolling(false)}
      >
            <TouchableOpacity onPress={rollDice} >
            {renderDiceIcons()}
      </TouchableOpacity>
         </Animatable.View> */}
          </View>

          {
            playersInfo === "red"  && <Arrow1></Arrow1>
          }   

        </View>



        <View style={styles.greenDice}>

          <View style={styles.diceBtn2}>

            {playersInfo == "green" && 
            <Animated.View
              style={[

                {
                  transform: [{ rotate: rollingRotation }],
                },
              ]}
            >
              <TouchableOpacity onPress={rollDiceGreen}>{renderDiceIcons()}</TouchableOpacity>
            </Animated.View>}
          </View>
          {
            playersInfo === "green"  && <Arrow3></Arrow3>
          }   
          </View>

        <View style={styles.blueDice}>
          <View style={styles.diceBtn3}>

            {playersInfo == "blue" &&
              <Animated.View
                style={[

                  {
                    transform: [{ rotate: rollingRotation }],
                  },
                ]}
              >
                <TouchableOpacity onPress={rollDiceBlue}>{renderDiceIcons()}</TouchableOpacity>
              </Animated.View>
              
              }
          </View>

          {
            playersInfo === "blue"  && <Arrow1></Arrow1>
          } 
        </View>



        <View style={styles.yellowDice}>
          <View style={styles.diceBtn4}>
            {playersInfo == "yellow" && 
            
            <Animated.View
              style={[

                {
                  transform: [{ rotate: rollingRotation }],
                },
              ]}
            >
              <TouchableOpacity onPress={rollDiceYellow}>{renderDiceIcons()}</TouchableOpacity>
            </Animated.View>}
          </View>

          {
            playersInfo === "yellow"  && <Arrow3></Arrow3>
          }
        </View>













      </ImageBackground>






    </View>


  );
};


const isCellInRange5 = (row, col) => {
  return row >= 6 && row <= 8 && col >= 6 && col <= 8;
};

// red box border
const isCellInRange6 = (row, col) => {

  if (row === 5 && col >= 0 && col <= 5 || row === 0 && col >= 0 && col <= 5 || col === 0 && row >= 0 && row <= 5 || col === 5 && row >= 0 && row <= 5) {
    return true;
  }
};

// blue box border
const isCellInRange7 = (row, col) => {

  if (row === 9 && col >= 0 && col <= 5 || row === 14 && col >= 0 && col <= 5 || col === 5 && row >= 9 && row <= 14 || col === 0 && row >= 9 && row <= 14) {
    return true;
  }
};

// yellow box border
const isCellInRange8 = (row, col) => {

  if (row === 9 && col >= 9 && col <= 14 || row === 14 && col >= 9 && col <= 14 || col === 9 && row >= 9 && row <= 14 || col === 14 && row >= 9 && row <= 14) {
    return true;
  }
};

// green box border
const isCellInRange9 = (row, col) => {

  if (row === 0 && col >= 9 && col <= 14 || row === 5 && col >= 9 && col <= 14 || col === 9 && row >= 0 && row <= 5 || col === 14 && row >= 0 && row <= 5) {
    return true;
  }
};

//remove inner cell grid

const removeInnerCellGrid = (row, col) => {

  if (row >= 1 && row <= 4 && col >= 1 && col <= 4 || row >= 1 && row <= 4 && col >= 10 && col <= 13 || row >= 10 && row <= 13 && col >= 10 && col <= 13 || row >= 10 && row <= 13 && col >= 1 && col <= 4 || row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    return true;
  }
};



// home box

const isCellInRange10 = (row, col) => {
  return row >= 6 && row <= 8 && col >= 6 && col <= 8;
};

//star cell
const isStarCell = (row, col) => {
  const starCells = [
    { row: 6, col: 1 },
    { row: 8, col: 2 },
    { row: 2, col: 6 },
    { row: 1, col: 8 },
    { row: 13, col: 6 },
    { row: 6, col: 12 },
    { row: 12, col: 8 },
    { row: 8, col: 13 },
  ];

  return starCells.some((cell) => cell.row === row && cell.col === col);
};



//red , green, yellow, blue cell for goti
const isCellColored = (row, col) => {
  // Red cells
  if (row === 6 && col === 1 || row === 7 && col >= 1 && col <= 5 || row === 2 && col === 6) {
    return '#ec1d27';
  }
  // Green cells
  if (row === 1 && col === 8 || col === 7 && row >= 1 && row <= 5 || row === 6 && col === 12) {
    return '#01A147';
  }
  // Blue cells
  if (row === 8 && col === 2 || col === 7 && row >= 9 && row <= 13 || row === 13 && col === 6) {
    return '#29b6f6';
  }
  // Yellow cells
  if (row === 8 && col === 13 || row === 7 && col >= 9 && col <= 13 || row === 12 && col === 8) {
    return '#ffe01b';
  }
  return 'transparent';
};


// circle design

const isRedCircleCell = (row, col) => {
  const circleCells = [
    { row: 2, col: 2 },
    { row: 2, col: 4 },
    { row: 4, col: 2 },
    { row: 4, col: 4 },



  ];

  return circleCells.some((cell) => cell.row === row && cell.col === col);
};

const isGreenCircleCell = (row, col) => {
  const circleCells = [
    { row: 2, col: 11 },
    { row: 2, col: 13 },
    { row: 4, col: 11 },
    { row: 4, col: 13 },



  ];

  return circleCells.some((cell) => cell.row === row && cell.col === col);
};


const isYellowCircleCell = (row, col) => {
  const circleCells = [
    { row: 11, col: 11 },
    { row: 11, col: 13 },
    { row: 13, col: 11 },
    { row: 13, col: 13 },



  ];

  return circleCells.some((cell) => cell.row === row && cell.col === col);
};


const isBlueCircleCell = (row, col) => {
  const circleCells = [
    { row: 11, col: 2 },
    { row: 11, col: 4 },
    { row: 13, col: 2 },
    { row: 13, col: 4 },



  ];

  return circleCells.some((cell) => cell.row === row && cell.col === col);
};



//arrow


const redArrowCell = (row, col) => {


  if (row === 7 && col === 0) {
    return '#ec1d27'
  }


}

const greenArrowCell = (row, col) => {


  if (row === 0 && col === 7) {
    return '#01A147'
  }


}
const yellowArrowCell = (row, col) => {

  if (row === 7 && col === 14) {
    return '#ffe01b'
  }


}
const blueArrowCell = (row, col) => {

  if (row === 14 && col === 7) {
    return '#29b6f6'
  }

}

//home design

const isHomeCell = (row, col) => {
  return row >= 6 && row <= 8 && col >= 6 && col <= 8;
};



const renderHomeText = (row, col) => {
  if (row === 7 && col === 7) {
    // Center cell
    return <Text style={{ color: 'black', fontSize: 9, fontWeight: 'bold', marginTop: -20 }}>HOME</Text>;
  }
  // return null;
};







// homebox design
const isHomeTargetCell = (row, col) => {
  return (row === 6 && col === 6)
};

const renderHomeComponent = (row, col) => {
  if (isHomeTargetCell(row, col)) {
    return (
      <HomeComponent></HomeComponent>

    );
  }
  return null;
};








const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    zIndex:0

  },
  gridRow: {
    flexDirection: 'row',
    borderWidth: 0,



  },
  gridCell: {
    width: 25,
    height: 26,
    borderWidth: 0.4,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    // aspectRatio: 1,
    zIndex:0
    // borderWidth: 1,


  },
  // highlightedCell: {
  //   backgroundColor: '#ffe01b', // Change the background color as needed
  // },
  removeGrid: {
    borderWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },

  red: {
    backgroundColor: '#ec1d27',
    borderColor: "#ec1d27",
    zIndex:0


  },
  green: {
    backgroundColor: '#01A147',
    borderColor: "#01A147",

  },
  yellow: {
    backgroundColor: '#ffe01b',
    borderColor: "#ffe01b"
  },
  blue: {
    backgroundColor: '#29b6f6',
    borderColor: "#29b6f6"
  },

  starCell: {
    backgroundColor: 'lightgray', 
    zIndex:0// Background color for star cells
  },

  circle: {
    width: 25,
    height: 25,
    borderRadius: 14,
    backgroundColor: '#ec1d27', // Change the color as needed
    position: 'absolute',
    top: 15,
    left: 12,
    marginTop: 1,
  },
  redGotiBox: {
    height: 55,
    width: 62,
    backgroundColor: "#6da6c0",
    position: "absolute",
    top: 110,
    left: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 20
  },
  greenGotiBox: {
    height: 55,
    width: 62,
    backgroundColor: "#6da6c0",
    position: "absolute",
    top: 108,
    right: 28,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 20
  },


  yellowGotiBox: {
    height: 55,
    width: 62,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 107,
    right: 28,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 20
  },

  blueGotiBox: {
    height: 55,
    width: 62,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 107,
    left: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 20
  },



  redDice: {
    height: 75,
    width: 75,
    backgroundColor: "#6da6c0",
    position: "absolute",
    top: 100,
    left: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn1: {
    height: 65,
    width: 65,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },


  greenDice: {
    height: 75,
    width: 75,
    backgroundColor: "#6da6c0",
    position: "absolute",
    top: 100,
    right: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn2: {
    height: 65,
    width: 65,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  blueDice: {
    height: 75,
    width: 75,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 100,
    left: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn3: {
    height: 65,
    width: 65,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  yellowDice: {
    height: 75,
    width: 75,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 100,
    right: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn4: {
    height: 65,
    width: 65,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  demo: {
    borderColor: "#ec1d27",
    borderWidth: 1,

  },
  dice: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#fdfffc",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 5,
    padding: 9,
    justifyContent: "center",
    position: "absolute"

  },

  dot: {
    width: 7.5,
    height: 7.5,
    backgroundColor: 'black',
    borderRadius: 7.5,
    marginTop: 5

    // margin:5


  },





















});

export default LudoBoard;


// remove the grid of these cells 1. (0,0) to (5,5)  2.(0,9) to (5,14)  3. (9,0) to (15,5)  4. (9,9) to (15,15)

//  change the background of half height of these cells 1. (6,6) to (8,6) red color 2. (6,6) to (6,8) green color 3. (8,6) to (8,8) blue   4. (6,8) to (8,8) yellow

// create the four equilateral traingle in these cell (6,6) to (8,8) and write home text on this

// place the star icon on these cells (6,1), (8,2), (2,6), (1,8), (13,6), (6,12), (12,8), (8,13)

//  change the background of of these cells 1. (6,1), (7,1) to (7,5), (1,6)  red color 2. (1,8), (6,13), (7,1) to (7,9) green color 3. (8,1), (13,6), (13,9) to (13,13) blue   4. (8,13),(7,9) to (7,13), (13,8) yellow


// how to remove the border of cell range start from (1,1) to (4,4)

// place the round circle at the top left of the cells (1,2) , (1,4), (3,2), (3,4)

// now place this icon on <Ionicons name="md-location-sharp" size={24} color="black" /> top middle of circle

//  place the four equilateral traingle in these cell (6,6) to (8,8) and first background color of equilateral triangle is red , second background color of equilateral triangle is green
//  third background color of equilateral triangle is yellow, fourth background color of equilateral triangle is blue


//  create a equlilateral triangle whose top is at the mid point of cell (7,7) and left point touches the start of the cell (6,6) and right point touches the start of the cell (8,8)



// break the home cell (6,6) to (8,8) into four parts and give the four different background color

//  design ludo home box excatly like a ludo king and ludo home box cells start from (6,6) to (8,8)

//  how i want to place the svg icon on these top middle of the cells (2,2), (2,4), (4,2), (4,4)


// how to create when user touch the dice it roll the dice and give some random no. between 1 to 6

//  if the dice value is 6 then put the listener on these cell (2,2), (2,4), (4,2), (4,4) if user  touch the cell 

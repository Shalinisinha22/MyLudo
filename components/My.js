import React from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Arrow from './Svg/Arrow';
import RedGoti from './Svg/RedGoti';
import GreenGoti from './Svg/GreenGoti';
import YellowGoti from './Svg/YellowGoti';
import BlueGoti from './Svg/BlueGoti';

// <Ionicons name="md-location-sharp" size={24} color="black" />

const App = () => {
  const numRows = 15;
  const numCols = 15;

  return (

    <>
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

                      removeInnerCellGrid(rowIndex, colIndex) ? styles.removeGrid
                        : null,

                    ]}
                  >


                    <Text style={{ width: "23", height: "25", justifyContent: "center", alignItems: "center" }}> {isStarCell(rowIndex, colIndex) && (
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

                    {renderHomeText(rowIndex, colIndex)}

                    {renderRedGotiSvgIcon(rowIndex + 1 , colIndex + 1 )}

                    {renderGreenGotiSvgIcon(rowIndex + 1 , colIndex + 1 )}

                    {renderYellowGotiSvgIcon(rowIndex + 1 , colIndex + 1 )}

                    {renderBlueGotiSvgIcon(rowIndex + 1 , colIndex + 1 )}

                  </View>



                ))}



              </View>
            ))}
          </View>


        </View>

<Arrow></Arrow>


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
          <TouchableOpacity style={styles.diceBtn1}><MaterialCommunityIcons name="dice-1" size={49} color="#fdfffc" /></TouchableOpacity>
        </View>



        <View style={styles.greenDice}><TouchableOpacity style={styles.diceBtn2}></TouchableOpacity></View>
        <View style={styles.blueDice}>
          <TouchableOpacity style={styles.diceBtn3}></TouchableOpacity>
        </View>
        <View style={styles.yellowDice}>
          <TouchableOpacity style={styles.diceBtn4}></TouchableOpacity>
        </View>





<View style={{width:76, height:75, position:"absolute", top:"45%", left:"40%"}}>

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


 </ImageBackground>

   



</SafeAreaView>
    </>





  );
};


const isCellInRange5 = (row, col) => {
  return row >= 6 && row <= 8 && col >= 6 && col <= 8;
};

// red box border
const isCellInRange6 = (row, col) => {

  if (row === 5 && col >= 0 && col <= 5 || row === 0 && col >= 0 && col <= 5 || col === 0 && row >= 0 && row <= 5 || col === 5 && row >= 0 && row <= 5) {
    return '#ec1d27';
  }
};

// blue box order
const isCellInRange7 = (row, col) => {

  if (row === 9 && col >= 0 && col <= 5 || row === 14 && col >= 0 && col <= 5 || col === 5 && row >= 9 && row <= 14 || col === 0 && row >= 9 && row <= 14) {
    return true;
  }
};

// yellow box order
const isCellInRange8 = (row, col) => {

  if (row === 9 && col >= 9 && col <= 14 || row === 14 && col >= 9 && col <= 14 || col === 9 && row >= 9 && row <= 14 || col === 14 && row >= 9 && row <= 14) {
    return true;
  }
};

// green box order
const isCellInRange9 = (row, col) => {

  if (row === 0 && col >= 9 && col <= 14 || row === 5 && col >= 9 && col <= 14 || col === 9 && row >= 0 && row <= 5 || col === 14 && row >= 0 && row <= 5) {
    return true;
  }
};

//remove inner grid

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



const isRedGotiTargetCell = (row, col) => {
  return (row === 2 && col === 2) || (row === 2 && col === 4) || (row === 4 && col === 2) || (row === 4 && col === 4);
};

const renderRedGotiSvgIcon = (row, col) => {
  if (isRedGotiTargetCell(row, col)) {
    return (
     <RedGoti></RedGoti>
    );
  }
  return null;
};


const isGreenGotiTargetCell = (row, col) => {
  return (row === 2 && col === 11) || (row === 2 && col === 13) || (row === 4 && col === 11) || (row === 4 && col === 13);
};

const renderGreenGotiSvgIcon = (row, col) => {
  if (isGreenGotiTargetCell(row, col)) {
    return (
     <GreenGoti></GreenGoti>
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
     <YellowGoti></YellowGoti>
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
     <BlueGoti></BlueGoti>
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



  },
  gridRow: {
    flexDirection: 'row',
    // backgroundColor:"white"
  },
  gridCell: {
    width: 25,
    height: 26,
    borderWidth: 0.4,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    borderWidth: 1,
    backgroundColor: "white"
    // backgroundColor:"white"

  },
  highlightedCell: {
    backgroundColor: '#ffe01b', // Change the background color as needed
  },
  removeGrid: {
    borderWidth: 0
  },

  red: {
    backgroundColor: '#ec1d27',
    borderColor: "#ec1d27"
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
    backgroundColor: 'lightgray', // Background color for star cells
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

  redGotiBox:{
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
    paddingRight:20
  },

  greenGotiBox:{
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
    borderRadius: 8 ,
    paddingRight:20
  },


  yellowGotiBox:{
    height: 55,
    width: 62,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 115,
    right: 28,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8 ,
    paddingRight:20
  },

  blueGotiBox:{
    height: 55,
    width: 62,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 115,
    left: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8 ,
    paddingRight:20
  },



  redDice: {
    height: 65,
    width: 65,
    backgroundColor: "#6da6c0",
    position: "absolute",
    top: 105,
    left: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn1: {
    height: 55,
    width: 55,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },


  greenDice: {
    height: 65,
    width: 65,
    backgroundColor: "#6da6c0",
    position: "absolute",
    top: 105,
    right: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn2: {
    height: 55,
    width: 55,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },


  blueDice: {
    height: 65,
    width: 65,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 110,
    left: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn3: {
    height: 55,
    width: 55,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  yellowDice: {
    height: 65,
    width: 65,
    backgroundColor: "#6da6c0",
    position: "absolute",
    bottom: 110,
    right: 78,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#f9e7b0",
    borderWidth: 1,
    borderRadius: 8
  },

  diceBtn4: {
    height: 55,
    width: 55,
    backgroundColor: "#ffc3c3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  // home:{
  //   backgroundColor:"#252422",
  //   borderColor:"#252422"
  // }




















});

export default App;


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

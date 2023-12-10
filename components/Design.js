import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CELL_SIZE = width / 6;

const Cell = ({ color }) => {
  return <View style={[styles.cell, { backgroundColor: color }]} />;
};

const Token = ({ color, index, moveToken }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const onPanGestureEvent = (event) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  };

  const onPanGestureEnd = () => {
    // Add your token movement logic here
    runOnJS(moveToken)(index);
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
  };

  return (
    <PanGestureHandler
      onGestureEvent={onPanGestureEvent}
      onEnded={onPanGestureEnd}
    >
      <Animated.View style={[styles.token, { backgroundColor: color }, animatedStyle]} />
    </PanGestureHandler>
  );
};

export default function Design() {
  const [diceValue, setDiceValue] = useState(1);
  const [selectedToken, setSelectedToken] = useState(null);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
  };

  const moveToken = (index) => {
    // Add your token movement logic here
    console.log(`Moving token ${index}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ludo Game</Text>
      <Text style={styles.dice}>Dice Value: {diceValue}</Text>
      <TouchableOpacity onPress={rollDice} style={styles.button}>
        <Text>Roll Dice</Text>
      </TouchableOpacity>

      <View style={styles.board}>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: 5 }).map((_, colIndex) => (
              <Cell key={colIndex} color={(rowIndex + colIndex) % 2 === 0 ? 'white' : 'green'} />
            ))}
          </View>
        ))}
        <View style={styles.row}>
          <Cell color="yellow" />
          <Cell color="yellow" />
          <Cell color="yellow" />
          <Cell color="yellow" />
          <Cell color="yellow" />
        </View>
        <View style={styles.row}>
          <Cell color="red" />
          <Cell color="red" />
          <Cell color="red" />
          <Cell color="red" />
          <Cell color="red" />
        </View>
        <View style={styles.row}>
          <Cell color="blue" />
          <Cell color="blue" />
          <Cell color="blue" />
          <Cell color="blue" />
          <Cell color="blue" />
        </View>
        <View style={styles.row}>
          <Cell color="green" />
          <Cell color="green" />
          <Cell color="green" />
          <Cell color="green" />
          <Cell color="green" />
        </View>
      </View>

      <View style={styles.tokensContainer}>
        <View style={styles.playerTokens}>
          <Token color="yellow" index={0} moveToken={moveToken} />
          <Token color="yellow" index={1} moveToken={moveToken} />
          <Token color="yellow" index={2} moveToken={moveToken} />
          <Token color="yellow" index={3} moveToken={moveToken} />
        </View>
        <View style={styles.playerTokens}>
          <Token color="red" index={0} moveToken={moveToken} />
          <Token color="red" index={1} moveToken={moveToken} />
          <Token color="red" index={2} moveToken={moveToken} />
          <Token color="red" index={3} moveToken={moveToken} />
        </View>
        <View style={styles.playerTokens}>
          <Token color="blue" index={0} moveToken={moveToken} />
          <Token color="blue" index={1} moveToken={moveToken} />
          <Token color="blue" index={2} moveToken={moveToken} />
          <Token color="blue" index={3} moveToken={moveToken} />
        </View>
        <View style={styles.playerTokens}>
          <Token color="green" index={0} moveToken={moveToken} />
          <Token color="green" index={1} moveToken={moveToken} />
          <Token color="green" index={2} moveToken={moveToken} />
          <Token color="green" index={3} moveToken={moveToken} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dice: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginBottom: 20,
  },
  board: {
    flexDirection: 'column-reverse',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 1,
    borderColor: 'black',
  },
  tokensContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerTokens: {
    alignItems: 'center',
  },
  token: {
    width: CELL_SIZE / 2,
    height: CELL_SIZE / 2,
    borderRadius: CELL_SIZE / 4,
    margin: 2,
  },
});




// LudoBoard.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const LudoBoard = () => {
  return (
    <View style={styles.board}>
      {/* Render the Ludo board squares */}
      {Array.from({ length: 5 }).map((_, row) => (
        <View key={row} style={styles.row}>
          {Array.from({ length: 5 }).map((_, col) => (
            <TouchableOpacity key={col} style={styles.square}>
              {/* Customize the styling and content of each square */}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LudoBoard;

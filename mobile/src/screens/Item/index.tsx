import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemScreen = () => {

  const style = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
  });
  
  return (
    <View style={style.container}>
      <Text>Item Screen</Text>
    </View>
  );
}

export default ItemScreen;

import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const HomeScreen = (props: any) => {
  const {navigation} = props;
  
  const style = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
  });

  const moveScreen = () => {
    navigation.navigate('Item');
  }
  
  return (
    <View>
      <View style={style.container}>
        <Text>Home Screen</Text>
      </View>
      <View>
      <Button
          title="move to item screen"
          accessibilityLabel="increment"
          onPress={moveScreen}
          color="blue"
        />
      </View>
    </View>
  );
}

export default HomeScreen;

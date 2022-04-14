import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions  } from 'react-native';
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

  const linedata = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [20, 45, 28, 80],
        strokeWidth: 2, // optional
      },
    ],
  };

  const style = StyleSheet.create({
    titleChart: {
      textAlign: "center",
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 40,
    }
  });
  
  return (
    <View style={{padding: 5}}>
      <Text style={style.titleChart}>
        240
      </Text>
      <LineChart
        data={linedata}
        width={Dimensions.get('window').width - 10} // from react-native
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
}

export default HomeScreen;

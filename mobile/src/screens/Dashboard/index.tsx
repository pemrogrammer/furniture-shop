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

const DashboardScreen = (props: any) => {
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
    body: {
      paddingLeft: 5,
      paddingRight: 5,
    },
    titleChart: {
      textAlign: "center",
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 25,
      fontWeight: "bold",
    }
  });
  
  return (
    <View style={style.body}>
      <LineChart
        data={linedata}
        width={Dimensions.get('window').width - 10} // from react-native
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#9ed765',
          backgroundGradientTo: '#9ed765',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `#FFF`,
          style: {
            borderRadius: 16
          }
        }}
        // bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <Text style={style.titleChart}>
        150
      </Text>
    </View>
  );
}

export default DashboardScreen;

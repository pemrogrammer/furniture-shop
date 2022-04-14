import * as React from 'react';
import { View, Text, Dimensions, SafeAreaView, ScrollView   } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

import styles from '../styles/dashboard.styles';
import { iListData, iChartData, iDashboardScreen } from '../interfaces/dashboard.interface';
import { items } from '../seed/items.seed';

const DashboardScreen = ({navigation} : iDashboardScreen) => {

  const chartData: iChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [20, 45, 28, 80],
        strokeWidth: 2, // optional
      },
    ],
  };

  const renderItem = () => (
    items.map(item => 
      <View key={item.id}>
        <Text>
          {item.title}
        </Text>
      </View>  
    )
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <LineChart
        data={chartData}
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
      <Text style={styles.titleChart}>
        150
      </Text>
      <ScrollView>
       <View>
         {renderItem()}
       </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen;

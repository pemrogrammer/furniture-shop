import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, SafeAreaView  } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
// import { ListItem } from '@rneui/themed';

import { iListData, iChartData } from '../interfaces/dashboard.interface';

const DashboardScreen = (props: any) => {
  const {navigation} = props;

  const chartData: iChartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [20, 45, 28, 80],
        strokeWidth: 2, // optional
      },
    ],
  };

  const listData: Array<iListData> = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
    },
    titleChart: {
      textAlign: "center",
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 25,
      fontWeight: "bold",
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  // const renderItem = (item: iListData) => (
  //   <ListItem              
  //     roundAvatar              
  //     title={`${item.title}`}  
  //     subtitle={item.title}                           
  //     // avatar={{ uri: item.picture.thumbnail }}   
  //     containerStyle={{ borderBottomWidth: 0 }} />          
  // )

  const Item = ({ title } : {title: string}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item } : {item: any}) => (
    <Item title={item.title} />
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
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default DashboardScreen;

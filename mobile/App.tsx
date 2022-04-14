import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import DashboardScreen from './src/screens/Dashboard';
import ItemScreen from './src/screens/Item';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Dashboard" 
            options={{
              title: "Dashboard",
              headerStyle: {
                backgroundColor: '#4a7bd0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: "center",
            }}
            component={DashboardScreen} />
          <Stack.Screen name="Item" component={ItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>    
  );
}

export default App;
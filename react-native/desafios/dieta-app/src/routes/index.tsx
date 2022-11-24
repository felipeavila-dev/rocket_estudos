import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Dashboard } from '../screens/Dashboard';

export const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='dashboard'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
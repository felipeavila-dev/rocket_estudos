import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Dashboard } from '../screens/Dashboard';
import { RegisterMeal } from '../screens/RegisterMeal';
import { Statistics } from '../screens/Statistics';

export const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Dashboard'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='Statistics' component={Statistics} />
          <Stack.Screen name='Register' component={RegisterMeal} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { EmployeeDetailScreen, EmployeesScreen } from '../screens';
import { ScreenParamsList } from './paramsList';

const Stack = createStackNavigator<ScreenParamsList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#6C3ECD',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen component={EmployeesScreen} name="Employees" />
      <Stack.Screen component={EmployeeDetailScreen} name="EmployeeDetail" />
    </Stack.Navigator>
  );
}

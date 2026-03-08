import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedScreen } from '../screens/FeedScreen';
import { LiveScreen } from '../screens/LiveScreen';
import { MonetizeScreen } from '../screens/MonetizeScreen';

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#131316', borderTopColor: '#2c2c33' },
        tabBarActiveTintColor: '#22d3ee',
        tabBarInactiveTintColor: '#a1a1aa'
      }}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Monetize" component={MonetizeScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  );
}

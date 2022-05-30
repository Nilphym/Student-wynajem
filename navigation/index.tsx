/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';
import FindScreen from '../screens/FindScreen';
import AccountScreen from '../screens/AccountScreen';
import AddScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import OfferScreen from '../screens/OfferScreen';
import ObservedScreen from '../screens/ObservedScreen';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oj!' }}
      />
      <Stack.Screen
        name="Offer"
        component={OfferScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Find"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint
      }}
    >
      <BottomTab.Screen
        name="Find"
        component={FindScreen}
        options={{
          title: 'Szukaj',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Observed"
        component={ObservedScreen}
        options={{
          title: 'Obserwowane',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-o" color={color} />
          ),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: 'Dodaj',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="plus-square-o" color={color} />
          ),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={AddScreen}
        options={{
          title: 'Wiadomości',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="commenting-o" color={color} />
          ),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Konto',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

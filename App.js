import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';

export default function App() {

    const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options = {{
          title: "LOGIN",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#005FE1"},

        }}/>
        <Stack.Screen name="Home" component={Home} 
        options = {{
          title: "HOME",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "#005FE1"},
        }}/>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

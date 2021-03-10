/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CreateUserScreen from './screen/CreateUserScreen'
import UserDetailScreen from './screen/UserDetailScreen'
import UserList from './screen/UserList'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='listaUsuarios' component={UserList} />
      <Stack.Screen name='creaUsuarios' component={CreateUserScreen} />
      <Stack.Screen name='detalleUsuarios' component={UserDetailScreen} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"

import CreateUserScreen from './screen/CreateUserScreen'
import UserList from './screen/UserList'
import UserDetailScreen from './screen/UserDetailScreen'

const Stack = createStackNavigator();

const MyStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="userList" component={UserList}/>
      <Stack.Screen name="createUser" component={CreateUserScreen}/>
      <Stack.Screen name= "userDetail" component={UserDetailScreen}/>
    </Stack.Navigator>
  )
}

function App() {
  return (
   <NavigationContainer>
     <MyStack/>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App


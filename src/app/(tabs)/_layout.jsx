import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';


export default function TabLayout() {

  return (
    <Tabs 
    initialRouteName='index'
    
    screenOptions={{ 
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#4360BD',
        tabBarStyle: { backgroundColor: '#132B75' },
        headerStyle: { backgroundColor: '#dce4f6'},
        headerShown: false
    }}>

      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: false,

          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />
    
      
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />

{/* 
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          headerShown: true,
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      /> */}

    </Tabs>
    
  )
}
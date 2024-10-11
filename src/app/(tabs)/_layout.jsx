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
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
    
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      {/* Uncomment this block if you want the profile tab */}
      {/* 
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
      */}
    </Tabs>
  )
}

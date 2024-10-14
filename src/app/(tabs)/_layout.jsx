import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-remix-icon';

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
            <Icon name="ri-home-fill" size="24" color={color}></Icon>
          ),
        }}
      />
    
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ri-search-fill" size="24" color={color}></Icon>
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

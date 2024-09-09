import React from 'react';
import { Stack } from 'expo-router/stack';
import { CountryProvider } from '../utils/CountryContext';


export default function RootLayout() {
  return (
    <>
      <CountryProvider>
        <Stack initialRouteName='(tabs)' screenOptions={{headerShown: false,}}>
          
          <Stack.Screen name="(tabs)"  options={{ 
            headerShown: false,
            headerStyle: {
              backgroundColor: '#dce4f6',
            },
            headerTintColor: '#fff',
             
            }} />
          
          <Stack.Screen name="pages/NewsDetails" options={{
            presentation: 'modal',
            headerShown: false,
            headerTitle: 'NewsDetails',
              }} />
              
          <Stack.Screen name="pages/Privacy" options={{
            presentation: 'modal',
            headerShown: false,
            headerTitle: 'Privacy',
              }} />
          
          <Stack.Screen name="pages/Terms" options={{
            presentation: 'modal',
            headerShown: false,
            headerTitle: 'Terms',
              }} />


        </Stack>
      </CountryProvider>
    </>
  );
}

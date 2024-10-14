import React from 'react';
import { Stack } from 'expo-router/stack';
import { CountryProvider } from '../utils/CountryContext';


export default function RootLayout() {
  return (
    <>
      <CountryProvider>
        <Stack initialRouteName='(tabs)' screenOptions={{headerShown: false,}}>
          
          <Stack.Screen name="(tabs)"  options={{ 

            headerStyle: {
              backgroundColor: '#dce4f6',
            },
            headerTintColor: '#fff',
             
            }} />
          
          <Stack.Screen name="pages/NewsDetails" options={{
            headerTitle: 'NewsDetails',
            presentation: 'modal'
              }} />
              
          <Stack.Screen name="pages/Privacy" options={{
            presentation: 'modal',
            headerTitle: 'Privacy',
              }} />
          
          <Stack.Screen name="pages/Terms" options={{
            presentation: 'modal',
            headerTitle: 'Terms',
              }} />


        </Stack>
      </CountryProvider>
    </>
  );
}

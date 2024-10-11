import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { WebView } from "react-native-webview";
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function NewsDetails() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const { url } = useLocalSearchParams();

  


  return (
    <View className="flex-1 bg-white">
      <View className="justify-between w-full flex-row items-center p-3 px-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full bg-gray-100">
          <Feather name="chevron-left" size={24} color="black"/>
        </TouchableOpacity>
        <Text>News Details</Text>
        <TouchableOpacity className="p-2 rounded-full bg-gray-100">
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* WEBVIEW */}
      <View className="flex-1">
        <WebView
        source={{ uri: url }}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
        mediaPlaybackRequiresUserAction = {true}
        allowsFullscreenVideo = {false}
        originWhitelist={['*']}
        javaScriptEnabled={true}  // Enable JavaScript execution
        domStorageEnabled={true}   // Enable DOM storage

        />
        {visible && (
          <View style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -15 }, { translateY: -15 }] }}>
            <ActivityIndicator size="large" color="#0F2058" />
          </View>
        )}
  
      </View>
      <Text>News</Text>
    </View>
  )
}
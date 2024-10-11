import { View, Text, TextInput, StatusBar, RefreshControl, FlatList, TouchableOpacity, Image, ActivityIndicator, Platform, SafeAreaView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import placeholder from '../../assets/images/default_image.jpg'
import { useRouter } from 'expo-router';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [ loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter()

  const API_KEY2 = '55723df2ad2b4324a023948ca4035031'
  const API_KEY = '981b08fa899d4d44b490545678025616'

  const apiBaseUrl = 'https://newsapi.org/v2';



  useEffect(() => {
    inputRef.current.focus();

  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 2) {
        handleSearch(query);
      }
    }, 9000); // 500ms delay
  
    return () => clearTimeout(timeoutId);
  }, [query]);
  

  function formatDate(isoDate) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, options)

  }


  
  const handleSearch = async (query) => {
    setQuery(query);
    if (query?.length > 2 ) {
      setLoading(true);
      try {
        // Try fetching with the first API key
        const response = await axios.get(`${apiBaseUrl}/everything?q=${query}&pageSize=100&apiKey=${API_KEY}`);
        const filteredNews = response.data.articles.filter(
          (article) => article.title !== "[Removed]"
        )
        setResults(filteredNews);
        setError(null);
      } catch (error) {
        setError('Failed to fetch with first APIKEY', error)
        try {
          // If the first API key fails, try fetching with the second API key
          const response = await axios.get(`${apiBaseUrl}/everything?q=${query}&pageSize=100&apiKey=${API_KEY2}`);
          const filteredNews = response.data.articles.filter(
            (article) => article.title !== "[Removed]"
          )
          setResults(filteredNews);
          setError(null);
        } catch (error) {
          setError('Failed to fetch with SECOND APIKEY', error)
        console.error(error)

        }

      } finally {
        setLoading(false)
      }
    } else {
      setResults([]);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    handleSearch().then(() => setRefreshing(false));
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 32: 0 }} className="mt-12">
     <StatusBar style="auto" />
     <View className="px-5">
      <View className="p-4">
        <View className="p-2 w-full rounded-2xl border border-[#0F2058] flex-row items-center justify-between">
            <Feather name="search" size={24} color="#0F2058" />
            <TextInput
            ref={inputRef}
            value={query}
            onChangeText={handleSearch}
            placeholder='Search for news'
            placeholderTextColor="#9EA0A4"
            clearButtonMode='always'
            className="w-11/12 h-full py-3 text-left text-black"
            />
        </View>
      </View>
        {loading && <ActivityIndicator size="large" color="#132B75" />}
        {error && <Text className="text-red-500 font-medium text-center mx-2">{error}</Text>}
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => (
               <View key={item.id} className="my-2 flex-row justify-between p-2 bg-white rounded-md">
                  <View className="w-[115] h-[135] rounded-md mr-2">
                    <Image
                    source={item.urlToImage ? {uri: item.urlToImage} : placeholder} 
                    style={{ width: '100%', height: '100%' }} 
                    resizeMode="cover" 
                    className="rounded-md"
                        />
                  </View>
                  <View className="w-[200]">
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center">
                        {/* <Image source={{uri: 'https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png'}} className="w-6 h-6"  /> */}
                          <Text className="text-[10px]">{item?.source.name}</Text>
                      </View>
                      <Text className="text-[10px]">{formatDate(item.publishedAt)}</Text>
                    </View>
                    <View className="h-9 w-[190px] truncate">
                        <Text className="font-bold truncate">{item?.title ? item.title.length > 80 ? item.title.slice(0, 60) + "..." : item?.title.split(" - ")[0] : "N/A"}</Text>
                    </View>
                    <View className="h-[48]">
                      <Text className="truncate text-[10px]">
                      { item?.description ? item.description.length > 150 ? item.description.slice(0, 100) + "..." : item.description.split(" - ")[0] : "N/A"}
                      </Text>
                    </View>
                    <Text className="truncate text-[10px]" >Author: {item?.author || "N/A"}</Text>
                    <TouchableOpacity onPress={() => router.push({ pathname: 'NewsDetails', params: { url: item.url } })} className="mt-2 ">
                      <Text className="text-blue-400 text-[12px] underline">Read More</Text>
                    </TouchableOpacity>
                  </View>
                </View>

          )}
        />

    </View>
    </SafeAreaView>
  )
}
{/* <View className="my-8 flex-row justify-between p-4 bg-white rounded-md">
  <View className="w-[115] h-[135] rounded-md">
  <Image
  source={{ uri: 'https://www.aljazeera.com/wp-content/uploads/2024/01/AFP__20240124__34GL9RU__v1__Preview__NigeriaEnvironmentPlastic-1706685608.jpg?w=770&resize=770%2C514' }} 
  style={{ width: '100%', height: '100%' }} 
  resizeMode="cover" 
  className="rounded-md"
      />
  </View>
  <View className="w-[200]">

    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center">
        <Image source={{uri: 'https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png'}} className="w-6 h-6"  />
          <Text className="text-[10px]">BBC News</Text>
      </View>
      <Text className="text-[10px]">June 30, 2024</Text>
    </View>
    <View className="h-9">
        <Text className="font-bold">Finding focus in the generative AI whirlwind whirlwind whirlwind whirlwind whirlwind whirlwind whirlwind</Text>
    </View>
    <View className="h-[48]">
      <Text className="truncate text-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, itaque quaerat obcaecati illum dignissimos, mollitia expedita repellendus rem tenetur voluptate veritatis a dolorum enim dolores nesciunt exercitationem debitis fugiat molestiae.
      </Text>
    </View>
    <TouchableOpacity className="mt-2">
      <Text className="text-blue-400 text-[12px] underline">Read More</Text>
    </TouchableOpacity>

  </View>
</View> */}
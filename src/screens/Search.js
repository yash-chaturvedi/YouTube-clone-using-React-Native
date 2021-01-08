import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet,Dimensions, ActivityIndicator,FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'

const API_KEY = 'AIzaSyDkCvCUUz0FuIonN6NDK3NWWEqgSth3av4'
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/search?'

export default function Search() {

    const [input,setInput] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const [loaded,setLoaded] = useState(true)

    const fetchData = async() => {
        try{
            setLoaded(false)
            const response = await fetch(`${BASE_URL}part=snippet&maxResults=10&q=${input}&type=video&key=${API_KEY}`);
            const result = await response.json();
            // console.log(result);
            setSearchResults(result.items)
            setLoaded(true)
        }catch(e){
            console.log(e.message);
        }
    }

    

    return (
        <View style={{ flex : 1 }}>
            <View style={styles.searchHeaderContainer} >
                <Ionicons name='md-arrow-back' size={32} />
                <TextInput 
                    style={styles.searchInput}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <Ionicons name='send-sharp' size={32} onPress={fetchData} />
            </View>

            {!loaded ?
                <View style={{flex:1 , justifyContent:'center'}}>
                    <ActivityIndicator color='black' size='large' />
                </View> : null }

            <FlatList
                data={searchResults}
                keyExtractor = {(item) => item.id.videoId}
                renderItem = { ({item}) => 
                    <MiniCard 
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        img={item.snippet.thumbnails.high.url}
                    /> 
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchHeaderContainer : {
        flexDirection : 'row',
        padding : 5,
        justifyContent : 'space-around',
        marginTop : 5,
        elevation : 4,
        backgroundColor : 'white'
    },
    searchInput : {
        width : Dimensions.get('screen').width*.7,
        backgroundColor : '#e6e6e6'
    }
})


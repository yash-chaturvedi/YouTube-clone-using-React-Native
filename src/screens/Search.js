import React, { useState } from 'react'
import { View, TextInput, StyleSheet,Dimensions, ActivityIndicator, FlatList, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'
import {useSelector, useDispatch} from 'react-redux'
import { useTheme } from '@react-navigation/native'

const API_KEY = 'AIzaSyCkp4czjlo4xGqNYc6hXJuIL0YRoCstzdQ'
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/search?'

export default Search = ({navigation}) => {

    const [input,setInput] = useState('')
    // const [searchResults,setSearchResults] = useState([])
    const [loaded,setLoaded] = useState(true)
    const dispatch = useDispatch()
    const searchResults = useSelector(state => state)
    const {colors} = useTheme()

    const fetchData = async() => {
        try{
            Keyboard.dismiss()
            setLoaded(false)
            const response = await fetch(`${BASE_URL}part=snippet&maxResults=10&q=${input}&type=video&key=${API_KEY}`);
            const result = await response.json();
            // console.log(result);
            // setSearchResults(result.items)
            dispatch({type : 'updateSearchResult' , payload : result.items})
            setLoaded(true)
            setInput('')
        }catch(e){
            console.log(e.message);
        }
    }

    

    return (
        <View style={{ flex : 1 ,marginTop : Constant.statusBarHeight}}>
            <View style={{...styles.searchHeaderContainer, backgroundColor : colors.headerColor}} >
                <Ionicons 
                    name='md-arrow-back' 
                    size={32} 
                    onPress = {() => navigation.goBack()}
                    color={colors.iconColor}
                />
                <TextInput 
                    style={styles.searchInput}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <Ionicons 
                    name='send-sharp' 
                    size={32} 
                    onPress={fetchData} 
                    color={colors.iconColor}
                />
            </View>

            {!loaded ?<ActivityIndicator color='black' size='large' style={{marginTop : 10}} /> : null }

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
    },
    searchInput : {
        width : Dimensions.get('screen').width*.7,
        backgroundColor : '#e6e6e6'
    }
})


import React from 'react'
import { View, FlatList } from 'react-native'
import {useSelector} from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {

    const searchResults = useSelector(state => state.searchResult)
    // console.log(searchResults);

    return (
        <View style={{ flex : 1 }} >
            <Header/>
            <FlatList
                keyExtractor={(item) => item.id.videoId}
                data={searchResults}
                renderItem={({item}) => 
                    <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        imgUrl={item.snippet.thumbnails.high.url}
                    />
                }
            />
        </View>
    )
}

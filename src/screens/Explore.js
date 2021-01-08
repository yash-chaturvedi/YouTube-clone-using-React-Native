import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView,SafeAreaView } from 'react-native'
import {useSelector} from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'

const Heading = ({name}) => 
    <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
            {name}
        </Text>
    </View>


const Explore = () => {

    const searchResults = useSelector(state => state)

    return (
        <View style={{flex : 1}}>
            <Header/>

            <FlatList

                ListHeaderComponent={
                    <>
                        <View style={styles.headingWrapper} >
                            <Heading name='trending' />
                            <Heading name='music' />
                            <Heading name='gaming' />
                            <Heading name='news' />
                            <Heading name='movies' />
                            <Heading name='Fashion' />
                        </View>
                        <Text style = {styles.separationText}>
                            Recect Search Results
                        </Text>
                    </>
                }

                keyExtractor={(item) => item.id.videoId}
                data={searchResults}
                renderItem={({item}) => 
                    <Card
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        imgUrl={item.snippet.thumbnails.high.url}
                    />
                }
                ListFooterComponent={
                    <View/>
                }
            />

        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    headingContainer : {
        backgroundColor : 'red',
        height : 50,
        width : 180,
        borderRadius : 6,
        marginTop : 10,
    },
    headingText : {
        textAlign : 'center',
        color : 'white',
        textTransform : 'capitalize',
        fontSize : 22,
        marginTop : 8
    },
    headingWrapper : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around'
    },
    separationText : {
        fontSize : 22,
        margin : 8,
        marginBottom : 0,
        borderBottomWidth : 1
    }
})

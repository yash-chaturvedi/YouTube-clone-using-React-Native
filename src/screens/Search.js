import React, { useState } from 'react'
import { View, TextInput, StyleSheet,Dimensions, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'

export default function Search() {

    const [input,setInput] = useState('')

    return (
        <View style={{ flex : 1 }}>
            <View style={styles.searchHeaderContainer} >
                <Ionicons name='md-arrow-back' size={32} />
                <TextInput 
                    style={styles.searchInput}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <Ionicons name='send-sharp' size={32} />
            </View>
            <ScrollView>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </ScrollView>
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


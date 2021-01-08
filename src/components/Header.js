import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Entypo, Ionicons, FontAwesome5} from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

export default function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer} >
            <View style={styles.headerBox }>
                <Entypo name="youtube" size={32} color="red" />
                <Text style={styles.headerText} >YouTube</Text>
            </View>

            <View style={styles.headerBox} >
                <Ionicons 
                    name='md-videocam-outline' 
                    size={28} 
                    color='#212121' 
                    style={styles.headerIcon} 
                />

                <Ionicons 
                    name='md-search-outline' 
                    size={28} 
                    color='#212121' 
                    style={styles.headerIcon} 
                    onPress = {() => navigation.navigate('search')}
                />

                <FontAwesome5 
                    name='toggle-on' 
                    size={28} 
                    color='#212121' 
                    style={styles.headerIcon} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer : {
        marginTop : Constant.statusBarHeight,
        height:45,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent : 'space-between',
        elevation : 4,
    },
    headerBox : {
        flexDirection : 'row',
        margin : 5,
        marginHorizontal : 20,
        justifyContent : 'space-around',
    },
    headerText : {
        fontSize : 22,
        marginLeft : 5,
        fontWeight : 'bold',
        color : '#212121'
    },
    headerIcon :{
        marginLeft : 25
    }
})
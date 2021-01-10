import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Entypo, Ionicons, Feather} from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const darkTheme = useSelector(state => state.darkTheme)
    const {colors} = useTheme()
    const toggle = darkTheme ? 'toggle-right': 'toggle-left'

    return (
        <View style={{
            ...styles.headerContainer, 
            backgroundColor : colors.headerColor,

            }} >
            <View style={styles.headerBox }>
                <Entypo name="youtube" size={32} color="red" />
                <Text style={{...styles.headerText, color : colors.iconColor}} >YouTube</Text>
            </View>

            <View style={styles.headerBox} >
                <Ionicons 
                    name='md-videocam-outline' 
                    size={28} 
                    color={colors.iconColor} 
                    style={styles.headerIcon} 
                />

                <Ionicons 
                    name='md-search-outline' 
                    size={28} 
                    color={colors.iconColor}  
                    style={styles.headerIcon} 
                    onPress = {() => navigation.navigate('search')}
                />

                <Feather 
                    name={toggle} 
                    size={30} 
                    color={colors.iconColor} 
                    style={styles.headerIcon} 
                    onPress = {() => dispatch({type : 'toggleTheme' , payload :!darkTheme })}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer : {
        marginTop : Constant.statusBarHeight,
        height:45,
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
    },
    headerIcon :{
        marginLeft : 25
    }
})
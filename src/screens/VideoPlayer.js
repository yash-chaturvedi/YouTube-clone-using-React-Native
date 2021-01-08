import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constant from 'expo-constants'

const VideoPlayer = () => {
    return (
        <View>
            <Text>Video Player</Text>
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    header :{
        marginTop : Constant.statusBarHeight,
    }
})

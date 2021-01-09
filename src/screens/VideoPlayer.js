import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview'

const VideoPlayer = ({route}) => {

    const {videoId, title} = route.params

    return (
        <View style={styles.videoWrapper} >
            <View style={styles.videoContainer} >
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />
            </View>
            <Text
                ellipsizeMode = 'tail'
                numberOfLines = {2}
                style={styles.videoTitle}
            >
                {title}
            </Text>
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    videoWrapper : {
        marginTop : Constant.statusBarHeight,
        flex : 1
    },
    videoContainer :{
        width : Dimensions.get('screen').width,
        height : 200
    },
    videoTitle : {
        fontSize : 15,
        fontFamily : 'sans-serif-medium',
        width : Dimensions.get('screen').width*.90,
        margin : 10,
        lineHeight : 22,
        paddingBottom : 8 ,
        borderBottomWidth : 1
    }
})

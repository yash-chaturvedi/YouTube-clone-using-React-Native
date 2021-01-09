import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'

export default function MiniCard({videoId, title, channel, img}) {

    const navigation = useNavigation();
    const {colors} = useTheme()

    return (
        <TouchableOpacity
        onPress = {() => navigation.navigate('videoPlayer',{videoId:videoId, title:title})}
        >
            <View style={styles.cardContainer}>
                <Image
                    source={{uri : img}} 
                    style={styles.cardImage}
                />
                <View>
                        <Text 
                        style={{...styles.cardDescriptionHeading, color:colors.iconColor}}
                        ellipsizeMode = 'tail'
                        numberOfLines = {3}>
                        {title}
                        </Text>

                        <Text style={{...styles.cardDescriptionText, color:colors.iconColor}} >{channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        flexDirection : 'row',
        margin : 10,
        marginBottom : 0
    },
    cardImage : {
        height : 100,
        width : Dimensions.get('screen').width*.45,
        marginRight : 7
    },
    cardDescriptionHeading : {
        fontSize : 15,
        fontFamily : 'sans-serif-medium',
        lineHeight : 20,
        width : Dimensions.get('screen').width/2,
        marginBottom : 10
    },
    cardDescriptionText : {
        fontSize : 12,
    }
})

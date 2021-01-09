import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'


export default function Card({videoId, title, channel, imgUrl}) {

    const navigation = useNavigation();
    const {colors} = useTheme()

    return (
        <TouchableOpacity
            onPress = {() => navigation.navigate('videoPlayer',{videoId:videoId, title:title})}
        >
            <View style={styles.cardContainer}>
                <Image
                    source={{uri : imgUrl}} 
                    style={styles.cardImage}
                />
                <View style={styles.cardDescription} >
                    <MaterialIcons name='account-circle' size={42} color={colors.iconColor} />
                    <View style={styles.cardDescriptionText} >
                        <Text 
                        style={{...styles.cardDescriptionHeader, color : colors.iconColor}}
                        ellipsizeMode = 'tail'
                        numberOfLines = {2}>
                            {title}
                        </Text>

                        <Text style={{color : colors.iconColor}} >{channel}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        margin : 10
    },
    cardImage : {
        height : 200,
        width : Dimensions.get('screen').width*.95
    },
    cardDescription : {
        flexDirection : 'row',
        margin : 5
    },
    cardDescriptionText : {
        marginLeft : 10
    },
    cardDescriptionHeader : {
        fontSize : 15,
        fontFamily : 'sans-serif-medium',
        width : Dimensions.get('screen').width*.75,
        lineHeight : 22,
        marginBottom : 5
    }
})
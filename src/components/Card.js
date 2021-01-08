import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Card({title, channel, imgUrl}) {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{uri : imgUrl}} 
                style={styles.cardImage}
            />
            <View style={styles.cardDescription} >
                <MaterialIcons name='account-circle' size={42} color='#212121' />
                <View style={styles.cardDescriptionText} >
                    <Text 
                    style={styles.cardDescriptionHeader}
                    ellipsizeMode = 'tail'
                    numberOfLines = {2}>
                        {title}
                    </Text>

                    <Text>{channel}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer : {
        marginBottom : 10
    },
    cardImage : {
        height : 200,
        width : Dimensions.get('screen').width
    },
    cardDescription : {
        flexDirection : 'row',
        margin : 5
    },
    cardDescriptionText : {
        marginLeft : 10
    },
    cardDescriptionHeader : {
        fontSize : 20,
        width : Dimensions.get('screen').width*.7
    }
})
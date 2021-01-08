import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions} from 'react-native'

export default function MiniCard({ title, channel, img}) {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{uri : img}} 
                style={styles.cardImage}
            />
            <View>
                    <Text 
                    style={styles.cardDescriptionHeading}
                    ellipsizeMode = 'tail'
                    numberOfLines = {3}>
                       {title}
                    </Text>

                    <Text style={styles.cardDescriptionText} >{channel}</Text>
            </View>
        </View>
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
        fontSize : 17,
        width : Dimensions.get('screen').width/2
    },
    cardDescriptionText : {
        fontSize : 12,
    }
})

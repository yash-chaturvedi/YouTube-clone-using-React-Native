import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions} from 'react-native'

export default function MiniCard() {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{uri : 'https://images.unsplash.com/photo-1610050152335-4133c2c7d500?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}} 
                style={styles.cardImage}
            />
            <View>
                    <Text 
                    style={styles.cardDescriptionHeading}
                    ellipsizeMode = 'tail'
                    numberOfLines = {3}>
                        card name 
                    </Text>

                    <Text style={styles.cardDescriptionText} >card name</Text>
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

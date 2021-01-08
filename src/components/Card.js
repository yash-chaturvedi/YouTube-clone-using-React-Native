import React from 'react'
import { View, Image, StyleSheet, Text, Dimensions} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Card() {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{uri : 'https://images.unsplash.com/photo-1610050152335-4133c2c7d500?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}} 
                style={styles.cardImage}
            />
            <View style={styles.cardDescription} >
                <MaterialIcons name='account-circle' size={42} color='#212121' />
                <View style={styles.cardDescriptionText} >
                    <Text 
                    style={styles.cardDescriptionHeader}
                    ellipsizeMode = 'tail'
                    numberOfLines = {2}>
                        card name 
                    </Text>

                    <Text>card name</Text>
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
        width : Dimensions.get('screen').width - 70
    }
})
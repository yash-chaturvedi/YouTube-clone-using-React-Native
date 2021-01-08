import React from 'react'
import { View, ScrollView } from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'

export default function Home() {
    return (
        <View style={{ flex : 1 }} >
            <Header/>
            <ScrollView>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
        </View>
    )
}

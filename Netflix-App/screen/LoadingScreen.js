import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoadingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 1000)
    })
    return (
        <View style={{ flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
            <View>
                <Text>Loading</Text>
                <ActivityIndicator size="large" color="red" />
            </View>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})
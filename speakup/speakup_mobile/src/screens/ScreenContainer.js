import React from 'react';
import { Children } from 'react';
import { StyleSheet, View } from 'react-native'

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{ children }</View>
);

export default ScreenContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 5,
    }
})
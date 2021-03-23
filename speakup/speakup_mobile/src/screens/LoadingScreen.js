import React, { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

const LoadingScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  useEffect(() => {
    // TODO:: check if user is logged in?

    setTimeout(() => {
      navigation.replace(ROUTES.Dashboard);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textview}>LOADING...</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview: {
    color: COLORS.WHITE,
    fontSize: 20,
  },
})

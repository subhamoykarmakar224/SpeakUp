import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
// import { createBottomTabNavigator, createAppContainer } from '@react-navigation/native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DASHBOARD SCREEN Sucks</Text>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

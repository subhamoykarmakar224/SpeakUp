import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createBottomTabNavigator, createAppContainer } from '@react-navigation/native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen Sucks</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

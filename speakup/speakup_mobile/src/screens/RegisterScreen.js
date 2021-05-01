import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Roundinput from "../components/Roundinput";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <Image
          source={require("../../assets/ic_handshake.png")}
          style={{ width: 100, height: 100, marginTop: 50 }}
        />
        <Text
          style={{
            paddingTop: 10,
            fontWeight: "bold",
            fontSize: 25,
            color: COLORS.WHITE,
          }}
        >
          Register
        </Text>
        <TextInput></TextInput>
      </View>
      <View style={styles.part2}></View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
    justifyContent: "center",
  },
  part1: {
    flex: 3,
    alignItems: "center",
  },
  part2: {
    flex: 2.2,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: COLORS.WHITE,
  },
});

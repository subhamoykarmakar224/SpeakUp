import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";

const RegisterScreen = () => {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
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

        <TextInput style={styles.input1} placeholder="Name"></TextInput>
        <TextInput style={styles.input2} placeholder="Age"></TextInput>
        <TextInput style={styles.input2} placeholder="Gender"></TextInput>
        <TextInput style={styles.input2} placeholder="Phone Number"></TextInput>
      </View>
      <View style={styles.part2}>
        <Text style={{ color: "grey", fontSize: 20, marginTop: 40 }}>
          Have an account?
        </Text>
        <TouchableOpacity onPress={buttonClickedHandler}>
          <Text style={{ color: COLORS.GREEN, fontSize: 30 }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={buttonClickedHandler} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
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
  input1: {
    marginTop: 20,
    textAlign: "center",
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
  input2: {
    textAlign: "center",
    height: 40,
    width: "75%",
    margin: 10,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
  button: {
    marginTop: 100,
    backgroundColor: "grey",
    borderRadius: 30,
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.GREEN,
  },
  buttonText: {
    fontSize: 25,
    color: COLORS.WHITE,
  },
});

import React from "react";
import { Button } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";
import Roundinput from "../components/Roundinput";

const LoginScreen = () => {
  const [number, onChangeNumber] = React.useState(null);
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
  const buttonClickedHandler1 = () => {
    console.log("You have clicked for registration!");
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
          Speak Up
        </Text>
        <Roundinput style={styles.input1} placeholder="Phone" kT="numeric" />
      </View>
      <View style={styles.part2}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={buttonClickedHandler1}>
          <Text style={{ color: "grey", fontSize: 20 }}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={buttonClickedHandler1}>
          <Text style={{ color: COLORS.GREEN, fontSize: 30 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    marginTop: 150,
    textAlign: "center",
    height: 100,
    width: "75%",
    margin: 12,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderColor: COLORS.GREEN,
    borderWidth: 2,
    // backgroundColor: "orange",
    backgroundColor: COLORS.WHITE,
  },
});

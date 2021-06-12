import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const VerifyMobileNumber = () => {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <Image
          source={require("../../assets/ic_handshake.png")}
          style={{ width: 100, height: 100, marginTop: 20 }}
        />
        <Text
          style={{
            paddingTop: 8,
            fontSize: 25,
            color: COLORS.WHITE,
          }}
        >
          VERIFY MOBILE NUMBER
        </Text>
        <Text
          style={{
            margin: 10,
            width: "75%",
            fontSize: 20,
            color: COLORS.WHITE,
          }}
        >
          OTP has been sent to you on your mobile number. Please enter below.
        </Text>
        <OTPInputView pinCount={6} />
      </View>
      <View style={styles.part2}>
        <Text style={{ color: "grey", fontSize: 20, marginTop: 40 }}>
          Remaining Time
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 40,
            margin: 20,
            color: COLORS.GREEN,
          }}
        >
          00:00
        </Text>
        <TouchableOpacity onPress={buttonClickedHandler} style={styles.button}>
          <Text style={styles.buttonText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyMobileNumber;

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
  button: {
    marginTop: 40,
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

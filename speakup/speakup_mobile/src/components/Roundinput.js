import React from "react";
import { StyleSheet, TextInput } from "react-native";

function Roundinput({ placeholder, kT }) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder={placeholder}
      keyboardType={kT}
    />
  );
}

export default Roundinput;

const styles = StyleSheet.create({
  input: {
    marginTop: 150,
    textAlign: "center",
    height: 45,
    width: "75%",
    margin: 12,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
  },
});

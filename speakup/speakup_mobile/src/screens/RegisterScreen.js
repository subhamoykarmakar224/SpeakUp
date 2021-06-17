import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";
import { Input, Button } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  const [stdCode, setStdCode] = useState('(+1) USA');
  const [phoneNumber, setPhoneNumber] = useState("9876543211");

  return (
    <ScreenContainer>
      <View style={styles.subcontainer}>
        <Text>REGISTER</Text>
        <View style={styles.countryCodeView}>
          <Text style={styles.countryCodeViewText}>{stdCode}</Text>
          <Button
            title="Select Country Code"
            onPress={() => setIsVisible(!isVisible)}
          />
        </View>
        <Input
          placeholder='(xxx) xxx xxxx'
          leftIcon={{ type: 'material-icons', name: 'phone' }}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(n) => setPhoneNumber(n)}
        />

        <Button
          title="Register"
        />

        <Text style={styles.registerText}>Already have an account?</Text>
        <Button
          title="Login"
          type="outline"
          onPress={() => navigation.pop() }
        />

      </View>
    </ScreenContainer>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  subcontainer: {
    width: '100%',
    padding: 50,
  },
  countryCodeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryCodeViewText: {
    fontSize: 20,
  },
  registerText: {
    marginTop: 20,
  },
})

import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";

const RegisterScreen = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>REGISTER SCREEN</Text>
    </ScreenContainer>
  )
}

export default RegisterScreen

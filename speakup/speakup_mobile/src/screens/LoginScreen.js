import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";

const LoginScreen = () => {
  const { signIn } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>LOGIN SCREEN</Text>
    </ScreenContainer>
  )
}

export default LoginScreen
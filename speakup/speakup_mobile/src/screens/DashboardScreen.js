import React, { useContext } from 'react';
import { Text } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";

const DashboardScreen = () => {
  const { signOut } = useContext(AuthContext);
  
  return (
    <ScreenContainer>
      <Text>DASHBOARD SCREEN</Text>
    </ScreenContainer>
  )
}

export default DashboardScreen

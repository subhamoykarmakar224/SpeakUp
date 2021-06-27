import React, { useContext } from 'react';
import { Text } from 'react-native'
import ScreenContainer from "../screens/ScreenContainer";
import { AuthContext } from "../constants/context";
import { AsyncStorageGetData } from "../utils/AsyncStorage";
import KEYS from "../constants/KEYS";

const DashboardScreen = () => {
  const { signOut } = useContext(AuthContext);
  
  return (
    <ScreenContainer>
      <Text>DASHBOARD SCREEN</Text>
      <Text>{JSON.stringify(AsyncStorageGetData(KEYS.KEY_FB_AUTH_TOKEN))}</Text>
    </ScreenContainer>
  )
}

export default DashboardScreen

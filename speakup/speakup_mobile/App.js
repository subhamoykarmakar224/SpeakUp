import React, { useState, useMemo, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";

import COLORS from "./src/constants/colors";

import { AuthContext } from "./src/constants/context";
import SplashScreen from "./src/screens/SplashScreen";
import RootStackScreen from "./src/navigation/RootStack";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: COLORS.GREEN },
  headerTitleStyle: { color: COLORS.WHITE },
  headerTintColor: COLORS.WHITE, // icons
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        // TODO :: get user token from firebase
        setIsLoading(false);
        setUserToken('user_token_firebase');
      },
      signUp: () => {
        // TODO :: get user token from firebase
        setIsLoading(false);
        setUserToken('user_token_firebase');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  // TODO :: Delete this later when firebase authentication done
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}

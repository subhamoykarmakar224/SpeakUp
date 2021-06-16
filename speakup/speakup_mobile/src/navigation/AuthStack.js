import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import ROUTES from "../constants/routes";
import ROUTES_TITLE from "../constants/routes_title";

const Auth = createStackNavigator();

const AuthStack = () => (
    <Auth.Navigator headerMode="none">
        <Auth.Screen name={ROUTES.Login} component={LoginScreen} 
        options={{
            title: ROUTES_TITLE.Login
        }} />
        <Auth.Screen name={ROUTES.Register} component={RegisterScreen} 
        options={{
            title: ROUTES_TITLE.Register
        }} />
    </Auth.Navigator>
);

export default AuthStack


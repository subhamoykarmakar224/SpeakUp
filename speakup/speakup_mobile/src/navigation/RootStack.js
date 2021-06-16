import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import ROUTES from "../constants/routes";
import AppStack from "../navigation/AppStack";
import AuthStack from "../navigation/AuthStack";

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
        {userToken ?
            <RootStack.Screen
                name={ROUTES.App}
                component={AppStack}
                options={{
                    animationEnabled: false,
                }}
            />
            :
            <RootStack.Screen
                name={ROUTES.Auth}
                component={AuthStack}
                options={{
                    animationEnabled: false,
                }}
            />
        }
    </RootStack.Navigator>
);

export default RootStackScreen


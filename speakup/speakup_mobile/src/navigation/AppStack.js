import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/DashboardScreen";
import TaskScreen from "../screens/TaskScreen";
import SearchScreen from "../screens/SearchScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ROUTES from '../constants/routes';
import ROUTES_TITLE from '../constants/routes_title';

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TaskStack = createStackNavigator();
const SearchStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const DashboardStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name={ROUTES.Dashboard} component={DashboardScreen} />
    </HomeStack.Navigator>
);

const TaskStackScreen = () => (
    <TaskStack.Navigator>
        <TaskStack.Screen name={ROUTES.Task} component={TaskScreen} />
    </TaskStack.Navigator>
);
const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name={ROUTES.Search} component={SearchScreen} />
    </SearchStack.Navigator>
);
const HistoryStackScreen = () => (
    <HistoryStack.Navigator>
        <HistoryStack.Screen name={ROUTES.History} component={HistoryScreen} />
    </HistoryStack.Navigator>
);
const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name={ROUTES.Profile} component={ProfileScreen} />
    </ProfileStack.Navigator>
);


const AppStack = () => (
    <Tabs.Navigator headerMode="none">
        
        <Tabs.Screen name={ROUTES.Task} component={TaskStackScreen}
            options={{
                title: ROUTES_TITLE.Task,
                /*tabBarIcon: ({focused, color, size}) => (
                    <Image
                      source={
                        focused
                          ? require('./assets/task.svg')
                          : require('./assets/favicon.png')
                      }
                      style={{
                        width: size,
                        height: size,
                        borderRadius: size,
                      }}
                    />
                  ),*/
            }} />
        <Tabs.Screen name={ROUTES.Dashboard} component={DashboardStackScreen}
            options={{
                title: ROUTES_TITLE.Dashboard
            }} />
        <Tabs.Screen name={ROUTES.Search} component={SearchStackScreen}
            options={{
                title: ROUTES_TITLE.Search
            }} />
        <Tabs.Screen name={ROUTES.History} component={HistoryStackScreen}
            options={{
                title: ROUTES_TITLE.History
            }} />
        <Tabs.Screen name={ROUTES.Profile} component={ProfileStackScreen}
            options={{
                title: ROUTES_TITLE.Profile
            }} />
    </Tabs.Navigator>
)

export default AppStack

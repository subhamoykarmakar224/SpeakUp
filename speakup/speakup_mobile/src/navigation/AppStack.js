import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {Icon} from "react-native-elements"

import DashboardScreen from "../screens/DashboardScreen";
import TaskScreen from "../screens/TaskScreen";
import SearchScreen from "../screens/SearchScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TaskVideoScreen from '../screens/TaskVideoScreen';
import TaskAudioScreen from '../screens/TaskAudioScreen';
import ROUTES from '../constants/routes';
import ROUTES_TITLE from '../constants/routes_title';
import COLORS from '../constants/colors';

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
        <TaskStack.Screen name={ROUTES.TaskAudio} component={TaskAudioScreen}/>
        <TaskStack.Screen name={ROUTES.TaskVideo} component={TaskVideoScreen}/>
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
    <Tabs.Navigator tabBarOptions={{showLabel:false}} initialRouteName={ROUTES.Task} headerMode="none">
        <Tabs.Screen name={ROUTES.Dashboard} component={DashboardStackScreen}
            options={{
                title: ROUTES_TITLE.Dashboard,
                tabBarIcon: ({focused, color, size}) => (
                    <Icon type='material-icons' name='home' color={focused ? COLORS.GREEN : COLORS.GREY }/>
                  ),
            }} />
        
        <Tabs.Screen name={ROUTES.Task} component={TaskStackScreen}
            options={{
                title: ROUTES_TITLE.Task,
                tabBarIcon: ({focused, color, size}) => (
                    <Icon type='material-icons-round' name='visibility' color={focused ? COLORS.GREEN : COLORS.GREY }/> //document_scanner
                  ),
            }} />
       
        <Tabs.Screen name={ROUTES.Search} component={SearchStackScreen}
            options={{
                title: ROUTES_TITLE.Search,
                tabBarIcon: ({focused, color, size}) => (
                    <Icon type='material-icons' name='search' color={focused ? COLORS.GREEN : COLORS.GREY }/>
                  ),
            }} />
        <Tabs.Screen name={ROUTES.History} component={HistoryStackScreen}
            options={{
                title: ROUTES_TITLE.History,
                tabBarIcon: ({focused, color, size}) => (
                    <Icon type='material-icons' name='history' color={focused ? COLORS.GREEN : COLORS.GREY }/>
                  ),
            }} />
        <Tabs.Screen name={ROUTES.Profile} component={ProfileStackScreen}
            options={{
                title: ROUTES_TITLE.Profile,
                tabBarIcon: ({focused, color, size}) => (
                    <Icon type='material-icons' name='logout' color={focused ? COLORS.GREEN : COLORS.GREY }/>//supervised_user_circle
                  ),
            }} />
    </Tabs.Navigator>
)

export default AppStack

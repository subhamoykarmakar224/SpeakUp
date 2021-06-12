import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "./src/constants/routes";
import COLORS from "./src/constants/colors";
import DashboardScreen from "./src/screens/DashboardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import VerifyMobileNumber from "./src/screens/VerifyMobileNumber";
import SearchScreen from "./src/screens/SearchScreen";
import TaskScreen from "./src/screens/TaskScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: COLORS.GREEN },
  headerTitleStyle: { color: COLORS.WHITE },
  headerTintColor: COLORS.WHITE, // icons
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.Task}
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name={ROUTES.Loading} component={LoadingScreen} />
        <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
        <Stack.Screen name={ROUTES.Register} component={RegisterScreen} />
        <Stack.Screen name={ROUTES.Dashboard} component={DashboardScreen} />
        <Stack.Screen name={ROUTES.Verify} component={VerifyMobileNumber} />
        <Stack.Screen name={ROUTES.Search} component={SearchScreen} />
        <Stack.Screen name={ROUTES.Task} component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

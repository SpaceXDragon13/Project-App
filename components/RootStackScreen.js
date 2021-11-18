import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "./SignupScreen";
import LoginScreen from "./LoginScreen";
import DrawerScreen from "./DrawerScreen";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator>
        <RootStack.Screen options = {{headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen options = {{headerShown: false}} name="SignupScreen" component={SignupScreen} />
        <RootStack.Screen options = {{headerShown: false}} name="DrawerScreen" component={DrawerScreen} />        
    </RootStack.Navigator>
);

export default RootStackScreen;
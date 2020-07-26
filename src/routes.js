import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator();

import Main from './pages/Main';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Personal from './pages/Personal'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main" component={Main}></AppStack.Screen>
                <AppStack.Screen name="Register" component={Register}></AppStack.Screen>
                <AppStack.Screen name="Profile" component={Profile}></AppStack.Screen>
                <AppStack.Screen name="Personal" component={Personal}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
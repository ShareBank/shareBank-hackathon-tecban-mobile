import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator();

import Main from './pages/Main';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Personal from './pages/Personal'
import Transactions from './pages/Transactions'
import ExtractionQR from './pages/ExtractionQR'
import MapATM from './pages/MapATM'
import ScannerQR from './pages/ScannerQR'
import AddBank from './pages/AddBank'
import BankManager from './pages/BankManager'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main" component={Main}></AppStack.Screen>
                <AppStack.Screen name="Register" component={Register}></AppStack.Screen>
                <AppStack.Screen name="Profile" component={Profile}></AppStack.Screen>
                <AppStack.Screen name="Personal" component={Personal}></AppStack.Screen>
                <AppStack.Screen name="Transactions" component={Transactions}></AppStack.Screen>
                <AppStack.Screen name="ExtractionsQR" component={ExtractionQR}></AppStack.Screen>
                <AppStack.Screen name="MapATM" component={MapATM}></AppStack.Screen>
                <AppStack.Screen name="ScannerQR" component={ScannerQR}></AppStack.Screen>
                <AppStack.Screen name="AddBank" component={AddBank}></AppStack.Screen>
                <AppStack.Screen name="BankManager" component={BankManager}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
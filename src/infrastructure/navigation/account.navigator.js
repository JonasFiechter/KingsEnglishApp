import React from 'react';

import { LoginScreen } from '../../features/account/screens/loginScreen';
import { AccountScreen } from '../../features/account/screens/account.screen';
import { RegisterScreen } from '../../features/account/screens/registerScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AccountNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Main' component={ AccountScreen } options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={ LoginScreen } options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={ RegisterScreen } options={{headerShown: false}}/>
        </Stack.Navigator>
    )
};
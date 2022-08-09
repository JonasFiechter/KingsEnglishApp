import React from 'react';
import { LoginScreen } from '../../features/login/screens/loginScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AccountNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Accounts' component={ () => null }/>
        </Stack.Navigator>
    )
};
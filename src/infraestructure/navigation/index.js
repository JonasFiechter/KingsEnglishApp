import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { KingsAppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export function Navigation() {
    const { isAuthenticated } = useContext(AuthenticationContext)

    return (
    // Only worked inside the stack navigator with the independent param = true
    <NavigationContainer independent={true}>
        { isAuthenticated ? <KingsAppNavigator></KingsAppNavigator> : (
            <AccountNavigator></AccountNavigator>
            )
        }
    </NavigationContainer>
    );
};
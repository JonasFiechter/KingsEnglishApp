import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { KingsAppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export function Navigation() {
    const { isAuthenticated } = useContext(AuthenticationContext)

    return (
    <NavigationContainer>
        { isAuthenticated ? <KingsAppNavigator></KingsAppNavigator> : (
            <AccountNavigator></AccountNavigator>
            )
        }
    </NavigationContainer>
    );
};
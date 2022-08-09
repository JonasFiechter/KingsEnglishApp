import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { KingsAppNavigator } from './app.navigator';

export function Navigation() {
    const { isAuthenticated } = useContext(AuthenticationContext)

    return isAuthenticated ? <KingsAppNavigator></KingsAppNavigator> : (
    <View><Text>NOT AUTHENTICATED</Text></View>
    );
};
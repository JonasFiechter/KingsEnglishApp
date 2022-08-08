import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/features/login/screens/loginScreen';
import { theme } from './src/infraestructure/theme/index';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { KingsApp } from './src/infraestructure/navigation/app.navigator'

const Stack = createNativeStackNavigator();

export default function App() {

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
		});  

		const [latoLoaded] = useLato({
		Lato_400Regular,
		})

		if(!oswaldLoaded || !latoLoaded) {
		return null;
		}
		
	return (
		<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
						<Stack.Screen name="KingsApp" component={KingsApp} options={{ headerShown: false }}/>
					</Stack.Navigator>
				</NavigationContainer>
		</ThemeProvider>
	)
};
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
import AuthProvider from './src/contexts/auth';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { KingsApp } from './src/infraestructure/navigation/app.navigator'
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBmKwzXIQ_7iufDh4U6GyU_4Wc-hyDEnf8",
	authDomain: "mealstogo-b2612.firebaseapp.com",
	projectId: "mealstogo-b2612",
	storageBucket: "mealstogo-b2612.appspot.com",
	messagingSenderId: "158582890553",
	appId: "1:158582890553:web:2ef50439fcd80f2ede2de8",
	};

initializeApp(firebaseConfig);

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
			<AuthProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
						<Stack.Screen name="KingsApp" component={KingsApp} options={{ headerShown: false }}/>
					</Stack.Navigator>
				</NavigationContainer>
			</AuthProvider>
		</ThemeProvider>
	)
};
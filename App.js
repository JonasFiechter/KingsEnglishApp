import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/features/login/screens/loginScreen';
import { HomeFeed } from './src/features/homeFeed/screens/homeFeed';
import { SettingsScreen } from './src/features/settings/screens/SettingsScreen';
import { ScheduleScreen } from './src/features/schedule/screens/ScheduleScreen';
import { DashboardScreen } from './src/features/dashboard/screens/dashboardScreen';
import { theme } from './src/infraestructure/theme/index';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AdminScreen } from './src/features/admin/screens/adminScreen';
import 'react-native-gesture-handler';
import AuthProvider from './src/contexts/auth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TAB_ICON = {
	Home: "md-home",
	Dashboard: "md-school-sharp",
	Admin: "enter-outline",
	Schedule: "calendar-sharp",
	Settings: "md-settings"
}

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name]
	return {
	  tabBarIcon: ({ size, color }) => (
		<Ionicons 
		  name={iconName} 
		  size={size} 
		  color={color}/>
	  ),
	  tabBarActiveTintColor: 'red',
	  tabBarInactiveTintColor: '#091267'
	}
}

function LoginStackScreen() {
	return (
		// This stack is the main one, still need to make work the logout button. Read the docs
		// For now use the header of the stack 'back' button to come back to the login page
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
			<Stack.Screen name="KingsApp" component={KingsApp} options={{}}/>
		</Stack.Navigator>
	);
  }

function KingsApp() {
	return (
		// Only worked inside the stack navigator with the independent param = true
		<NavigationContainer independent={true}>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen name="Home" component={HomeFeed} options={{headerShown: false}}/>
				<Tab.Screen name="Dashboard" component={DashboardScreen}/>
				<Tab.Screen name="Schedule" component={ScheduleScreen}/>
				<Tab.Screen name="Admin" component={AdminScreen}/>
				<Tab.Screen name="Settings" component={SettingsScreen}/>
			</Tab.Navigator>
		</NavigationContainer>
		)
}

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
					<LoginStackScreen/>
				</NavigationContainer>
			</AuthProvider>
		</ThemeProvider>
	)
};


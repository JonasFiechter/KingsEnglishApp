import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useState } from 'react';
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

const Tab = createBottomTabNavigator();

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
	  <LoginStack.Navigator initialRouteName={"Initial"}>
		<LoginStack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
	  </LoginStack.Navigator>
	);
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
			<LoginScreen/>
		</ThemeProvider>
	)
};

{/* <NavigationContainer>
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name="Home" component={HomeFeed} options={{headerShown: false}}/>
					<Tab.Screen name="Dashboard" component={DashboardScreen}/>
					<Tab.Screen name="Schedule" component={ScheduleScreen}/>
					<Tab.Screen name="Admin" component={AdminScreen}/>
					<Tab.Screen name="Settings" component={SettingsScreen}/>
				</Tab.Navigator>
			</NavigationContainer> */}
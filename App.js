import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { HomeFeed } from './src/features/homeFeed/screens/homeFeed';
import { SettingsScreen } from './src/features/settings/screens/SettingsScreen';
import { theme } from './src/infraestructure/theme/index';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Home: "md-home",
	Dashboard: "md-bandage",
	Admin: "md-git-merge",
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
	  tabBarActiveTintColor: '#091267',
	  tabBarInactiveTintColor: 'gray'
	}
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
			<NavigationContainer>
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name="Home" component={HomeFeed} options={{headerShown: false}}/>
					<Tab.Screen name="Dashboard" component={HomeFeed} options={{headerShown: false}}/>
					<Tab.Screen name="Admin" component={HomeFeed} options={{headerShown: false}}/>
					<Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
				</Tab.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
};

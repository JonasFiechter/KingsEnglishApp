import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { HomeFeed } from './src/features/homeFeed/screens/homeFeed';
import { SettingsScreen } from './src/features/settings/screens/SettingsScreen';
import { theme } from './src/infraestructure/theme/index';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
				<Tab.Navigator>
					<Tab.Screen name="Home" component={HomeFeed} />
					<Tab.Screen name="Dashboard" component={HomeFeed} />
					<Tab.Screen name="Admin" component={HomeFeed} />
					<Tab.Screen name="Settings" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
};

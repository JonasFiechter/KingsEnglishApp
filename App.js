import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infraestructure/theme/index';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import 'react-native-gesture-handler';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from './src/infraestructure/navigation/index';


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
			<AuthenticationContextProvider>
				<Navigation></Navigation>
			</AuthenticationContextProvider>
		</ThemeProvider>
	)
};
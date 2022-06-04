import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import { HomeFeed } from './src/features/homeFeed/screens/homeFeed';
import { theme } from './src/infraestructure/theme/index';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

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
  			<HomeFeed/>
		</ThemeProvider>
	)
};

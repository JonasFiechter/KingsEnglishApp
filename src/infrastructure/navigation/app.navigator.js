import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { HomeFeed } from '../../features/homeFeed/screens/homeFeed';
import { DashboardScreen } from '../../features/dashboard/screens/dashboardScreen';
import { ScheduleScreen } from '../../features/schedule/screens/ScheduleScreen';
import { AdminScreen } from '../../features/admin/screens/adminScreen';
import { SettingsScreen } from '../../features/settings/screens/SettingsScreen';
import { NavigationContainer } from "@react-navigation/native";

const TAB_ICON = {
	Home: "md-home",
	Dashboard: "md-school-sharp",
	Admin: "enter-outline",
	Schedule: "calendar-sharp",
	Settings: "md-settings"
}

const Tab = createBottomTabNavigator();

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

export function KingsAppNavigator({ navigation }) {
    return (
		<NavigationContainer independent={true}>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen 
					name="Home" 
					component={HomeFeed} 
					options={{headerShown: 
					false}}
				/>
				<Tab.Screen 
					name="Dashboard" 
					component={DashboardScreen} 
					navigation={navigation}
					options={{headerShown: false}}
				/>
				<Tab.Screen name="Schedule" component={ScheduleScreen}/>
				<Tab.Screen name="Admin" component={AdminScreen}/>
				<Tab.Screen name="Settings" component={SettingsScreen}/>
			</Tab.Navigator>
		</NavigationContainer>
		)
}
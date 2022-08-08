import React from "react";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { View } from "react-native";

function LogOutButton({ navigation=useNavigation }) {
    return (
        <Button 
            title="Logout"
            onPress={() => { navigation.navigate('Login')} }
        />
    )
}

export const DashboardScreen = ({ navigation }) => {
    return (
        <View>
            <Text variant="error">Dashboard Screen WORKING!!!</Text>
            <LogOutButton navigation={navigation}/>
        </View>
    );
};
import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { View } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


function LogOutButton() {
    const {setIsAuthenticated} = useContext(AuthenticationContext)
    return (
        <Button 
            title="Logout"
            onPress={() => { setIsAuthenticated(false) } }
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
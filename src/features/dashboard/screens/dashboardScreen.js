import React, { useContext, useState } from "react";
import { Alert, Button } from "react-native";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LogoutButton, DashboardView, Content, ButtonsContainer } from "./dashboardScreenStyles.js"

//  Need to integrate an confirmation message before log out!

function logoutConfirmDialog(authFunction) {
    Alert.alert(
        "Log out confirmation", 
        "Are you sure you want to leave?", 
        //  Buttons array
        [
            {
                text: 'yes',
                onPress: () => {authFunction(false)}
            },
            {
                text: 'No',
            },
        ]
    );
};

function LogOutButton() {
    const {setIsAuthenticated} = useContext(AuthenticationContext)

    return (
        <LogoutButton
            onPress={() => logoutConfirmDialog(setIsAuthenticated)}
        >Log out</LogoutButton>
    );
};

export const DashboardScreen = ({ navigation }) => {
    return (
        <DashboardView>
            <Content>
                <Text variant="error">Dashboard Screen WORKING!!!</Text>
                <ButtonsContainer>
                    <LogOutButton navigation={navigation}/>
                </ButtonsContainer>
            </Content>
        </DashboardView>
    );
};
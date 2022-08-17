import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LogoutButton, DashboardView, Content, ButtonsContainer } from "./dashboardScreenStyles.js"

//  Need to integrate an confirmation message before log out!

function LogOutButton() {
    const {setIsAuthenticated} = useContext(AuthenticationContext)
    return (
        <LogoutButton
            onPress={() => {setIsAuthenticated(false)}}
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
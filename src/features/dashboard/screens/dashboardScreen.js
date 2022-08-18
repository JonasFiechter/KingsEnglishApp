import React, { useContext, useState } from "react";
import { Alert, Button } from "react-native";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { 
    LogoutButton, 
    DashboardView, 
    Content, 
    ButtonsContainer, 
    UserInfo,
    UserImage
} from "./dashboardScreenStyles.js"
import { SafeArea } from "../../../components/safeArea/SafeArea";

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
    const { user } = useContext(AuthenticationContext)
    return (
        <DashboardView>
            <SafeArea>
                <Content>
                    <UserInfo>
                        <UserImage></UserImage>
                        <Text variant="error">{user !== null ? user.email : 'DeveloperMode'}</Text>
                    </UserInfo>
                    <ButtonsContainer>
                        <LogOutButton navigation={navigation}/>
                    </ButtonsContainer>
                </Content>
            </SafeArea>
        </DashboardView>
    );
};
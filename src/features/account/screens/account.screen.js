import React from "react";
import { KingsLogo, Background, ButtonsContainer, AuthButton, VersionLabel } from "./account.styles";

export function AccountScreen({ navigation }) {
    return (
        <Background>
            <KingsLogo></KingsLogo>
            <ButtonsContainer>
                <AuthButton 
                    icon='sword' 
                    mode='contained'
                    onPress={() => {navigation.navigate('Login')}}
                >LogIn</AuthButton>
                <AuthButton
                    icon='shield' 
                    mode='contained'
                    onPress={() => {navigation.navigate('Register')}}
                >Register</AuthButton>
            </ButtonsContainer>
            <VersionLabel>pre_alpha_0.032.2022</VersionLabel>
        </Background>
    )
};
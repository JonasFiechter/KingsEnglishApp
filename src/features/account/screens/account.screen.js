import React from "react";
import { KingsLogo, Background, ButtonsContainer, AuthButton, RegisterButton, VersionLabel } from "./account.style";

export function AccountScreen() {
    return (
        <Background>
            <KingsLogo></KingsLogo>
            <ButtonsContainer>
                <AuthButton 
                    icon='sword' 
                    mode='contained'
                    onPress={() => {console.log('Pressed Login')}}
                >LogIn</AuthButton>
                <AuthButton 
                    icon='shield' 
                    mode='contained'
                    onPress={() => {console.log('Pressed Register')}}
                >Register</AuthButton>
            </ButtonsContainer>
            <VersionLabel>pre-alpha 0.032.2022</VersionLabel>
        </Background>
    )
}
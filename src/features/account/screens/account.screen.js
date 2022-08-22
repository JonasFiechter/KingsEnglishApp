import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { KingsLogo, Background, ButtonsContainer, AuthButton, VersionLabel } from "./account.styles";
import { Text } from "../../../components/typography/textComponent";

export function AccountScreen({ navigation }) {
    const { 
        comunicate, 
        setErrorCode, 
        setMessage, 
        setError, 
        setIsAuthenticated 
    } = useContext(AuthenticationContext)

    return (
        <Background>
            <KingsLogo></KingsLogo>
            <ButtonsContainer>
                <AuthButton 
                    icon='sword' 
                    mode='contained'
                    onPress={() => {
                        navigation.navigate('Login'),
                        setError(null),
                        setErrorCode(null),
                        setMessage(null)
                    }}
                >LogIn</AuthButton>
                <AuthButton
                    icon='shield' 
                    mode='contained'
                    onPress={() => {
                        navigation.navigate('Register'), 
                        setError(null),
                        setErrorCode(null),
                        setMessage(null)
                    }}
                >Register</AuthButton>
                <AuthButton // ONLY WHILE IN DEVELOPMENT !!!
                    icon='arrow-right-bold' 
                    mode='contained'
                    onPress={() => {
                        setIsAuthenticated(true), 
                        setError(null),
                        setErrorCode(null),
                        setMessage(null)
                    }}
                >{'Dev access </>'}</AuthButton>
                {comunicate[0] && (
                    <Text variant='success'>{comunicate[0]}</Text>
                )}
            </ButtonsContainer>
            <VersionLabel>pre_alpha_0.032.2022</VersionLabel>
        </Background>
    )
};
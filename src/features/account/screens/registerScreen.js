import React from "react";
import { // This imports are the same from login screen so there is no need to create a style file
    FormContainer, 
    ButtonsContainer, 
    UserInput,
    LogInButton,
    Background,
    KingsLogo, 
  } from "./loginScreenStyles";

export function RegisterScreen({ navigation }) {
    return (
        <Background>
        <KingsLogo></KingsLogo>
        <FormContainer>
          <UserInput label='Email'/>
          <UserInput label='Password'/>
          <ButtonsContainer>
            <LogInButton 
                icon='crown' 
                mode='contained'
                onPress={() => {navigation.navigate('KingsApp')}}
            >Register</LogInButton>
            <LogInButton 
                icon='arrow-left-bold' 
                mode='contained'
                onPress={() => {navigation.navigate('Main')}}
            >Go Back</LogInButton>
          </ButtonsContainer>
        </FormContainer>
      </Background>
    )
};
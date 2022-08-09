import React from "react";
import { 
  FormContainer, 
  ButtonsContainer, 
  UserInput,
  LogInButton,
  Background,
  KingsLogo, 
} from "./loginScreenStyles";

export const LoginScreen = ({ navigation }) => {
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
            >Login</LogInButton>
            <LogInButton 
                icon='arrow-left-bold' 
                mode='contained'
                onPress={() => {navigation.navigate('Main')}}
            >Go Back</LogInButton>
          </ButtonsContainer>
        </FormContainer>
      </Background>
    );
};
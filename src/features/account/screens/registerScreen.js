import React, { useState } from "react";
import { register } from "../../../services/authentication/authentication.service";
import { // This imports are the same from login screen so there is no need to create a style file
    FormContainer, 
    ButtonsContainer, 
    UserInput,
    LogInButton,
    Background,
    KingsLogo, 
  } from "./loginScreenStyles";

export function RegisterScreen({ navigation }) {
  const [isSignedIn, setIsSignedIn] = useState(false)
  // Text input states
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  return (
      <Background>
      <KingsLogo></KingsLogo>
      <FormContainer>
      <UserInput label='Email' value={email} onChangeText={text=> setEmail(text)}/>
      <UserInput label='Password' value={password} secureTextEntry={true} onChangeText={text=> setpassword(text)}/>
      <UserInput label='Password confirmation' value={password2} secureTextEntry={true} onChangeText={text=> setpassword2(text)}/>
        <ButtonsContainer>
          <LogInButton 
              icon='crown' 
              mode='contained'
              onPress={() => {register({email, password})}}
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
import React, { useState }from "react";
import { 
  FormContainer, 
  ButtonsContainer, 
  UserInput,
  LogInButton,
  Background,
  KingsLogo, 
} from "./loginScreenStyles";
import { signIn } from "../../../services/authentication/authentication.service";

export const LoginScreen = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  // Text input states
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  return (
    <Background>
      <KingsLogo></KingsLogo>
      <FormContainer>
        <UserInput label='Email' value={email} onChangeText={text=> setemail(text)}/>
        <UserInput label='Password' value={password} secureTextEntry={true} onChangeText={text=> setpassword(text)}/>
        <ButtonsContainer>
          <LogInButton 
              icon='crown' 
              mode='contained'
              onPress={signIn}
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
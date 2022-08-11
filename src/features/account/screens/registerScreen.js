import React, { useContext, useState } from "react";
import { Text } from "../../../components/typography/textComponent";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { // This imports are the same from login screen so there is no need to create a style file
    FormContainer, 
    ButtonsContainer, 
    UserInput,
    LogInButton,
    Background,
    KingsLogo, 
  } from "./loginScreenStyles";

export function RegisterScreen({ navigation }) {
  // Text input states
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const { register, comunicate } = useContext(AuthenticationContext)
  console.log(comunicate)
  return (
      <Background>
      <KingsLogo></KingsLogo>
      <FormContainer>
      <UserInput 
        label='Email' 
        value={email} 
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        onChangeText={text=> setEmail(text)}
      />
      <UserInput 
        label='Password' 
        value={password} 
        secureTextEntry={true} 
        onChangeText={text=> setpassword(text)}
      />
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
          {comunicate[1] && (
            <Text variant='error'>{comunicate[1]}</Text>
          )}
          {comunicate[0] && (
            <Text variant='error'>{comunicate[0]}</Text>
          )}
        </ButtonsContainer>
      </FormContainer>
    </Background>
  )
};
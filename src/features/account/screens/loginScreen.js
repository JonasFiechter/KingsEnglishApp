import React, { useContext, useState }from "react";
import { 
  FormContainer, 
  ButtonsContainer, 
  UserInput,
  LogInButton,
  Background,
  KingsLogo, 
} from "./loginScreenStyles";
import { onLogin, error } from "../../../services/authentication/authentication.service";
import { Text } from "../../../components/typography/textComponent";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  // Text input states
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const { onLogin, error } = useContext(AuthenticationContext)

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
          textContentType='password'
          autoCapitalize='none'
          secure={true}
          onChangeText={text=> setpassword(text)}
        />
        <ButtonsContainer>
          <LogInButton 
              icon='crown' 
              mode='contained'
              //  For now we will use a function without authenticate only to open the appNavigator
              onPress={() => {onLogin(email, password)}}
          >Login</LogInButton>
          <LogInButton 
              icon='arrow-left-bold' 
              mode='contained'
              onPress={() => {navigation.navigate('Main')}}
          >Go Back</LogInButton>
          <LogInButton 
              icon='arrow-right-bold' 
              mode='contained'
              onPress={() => {navigation.navigate('TempKings')}}
          >TempKings</LogInButton>
        </ButtonsContainer>
        {error && (
          <Text variant='error'>{error}</Text>
          )}
      </FormContainer>
    </Background>
  );
};
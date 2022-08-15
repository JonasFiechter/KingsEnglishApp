import React, { useContext, useState }from "react";
import { 
  FormContainer, 
  ButtonsContainer, 
  UserInput,
  LogInButton,
  Background,
  KingsLogo, 
} from "./loginScreenStyles";
import { Text } from "../../../components/typography/textComponent";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  // Text input states
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const { onLogin, comunicate } = useContext(AuthenticationContext)

  return (
    <Background>
      <KingsLogo></KingsLogo>
      <FormContainer>
        <UserInput 
          label='Email' 
          value={email}
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
          {comunicate[2] && (
            <Text variant='error'>{comunicate[2]}</Text>
          )}
        </ButtonsContainer>
      </FormContainer>
    </Background>
  );
};
import React from "react";
import { SafeArea } from "../../../components/safeArea/SafeArea";
import { 
  FormContainer, 
  ButtonsContainer, 
  UserInput, 
  View, 
  LogInButton, 
  SignUpButton,
  KingsTitle
} from "./loginScreenStyles";


export const LoginScreen = () => {
    return (
      <View>
        <SafeArea>
            <FormContainer>
              <KingsTitle></KingsTitle>
              <UserInput placeholder="Your email"/>
              <UserInput placeholder="Your password"/>
              <ButtonsContainer>
                <LogInButton/>
                <SignUpButton/>
              </ButtonsContainer>
            </FormContainer>
        </SafeArea>
      </View>
    );
};
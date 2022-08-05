import React, { useState } from "react";
import { Text } from "../../../components/typography/textComponent";
import { SafeArea } from "../../../components/safeArea/SafeArea";
import { FormContainer, MyButton, UserEmail, UserPassword } from "./loginScreenStyles";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { View } from './loginScreenStyles'


function GoToKingsButton() {
  const navigation = useNavigation();
  
  return (
    <Button
      title="Enter"
      onPress={() => {
        navigation.navigate('KingsApp');
      }}
    />
  );
}

export const LoginScreen = () => {
    return (
      <View>
        <SafeArea>
          <Text variant="error">Login Screen WORKING!!!</Text>
            <FormContainer>
              <UserEmail placeholder="Your email"/>
              <UserPassword placeholder="Your password"/>
              <GoToKingsButton></GoToKingsButton>
            </FormContainer>
        </SafeArea>
      </View>
    );
};
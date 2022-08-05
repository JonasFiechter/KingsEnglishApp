import React, { useState } from "react";
import { Text } from "../../../components/typography/textComponent";
import { SafeArea } from "../../../components/safeArea/SafeArea";
import { FormContainer, UserInput, View } from "./loginScreenStyles";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native"

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
            <FormContainer>
              <Text>Welcome to KingsEnglishApp</Text>
              <UserInput placeholder="Your email"/>
              <UserInput placeholder="Your password"/>
              <GoToKingsButton></GoToKingsButton>
            </FormContainer>
        </SafeArea>
      </View>
    );
};
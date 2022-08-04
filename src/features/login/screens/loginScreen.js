import React from "react";
import { Text } from "../../../components/typography/textComponent";
import { SafeArea } from "../../../components/safeArea/SafeArea";
import { MyButton } from "./loginScreenStyles";
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
        <SafeArea>
            <Text variant="error">Login Screen WORKING!!!</Text>
            <GoToKingsButton></GoToKingsButton>
        </SafeArea>
    );
};
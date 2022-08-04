import React from "react";
import { Text } from "../../../components/typography/textComponent";
import { SafeArea } from "../../../components/safeArea/SafeArea";
import { MyButton } from "./loginScreenStyles";

function handleLogin() {
    alert('YOU ARE LOGGED IN')
}

export const LoginScreen = () => {
    return (
        <SafeArea>
            <Text variant="error">Login Screen WORKING!!!</Text>
            <MyButton></MyButton>
        </SafeArea>
    );
};
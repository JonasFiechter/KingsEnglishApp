import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/textComponent";

export const AdminScreen = () => {
    return (
        <View>
            <Text variant='error'>Admin Screen WORKING!!!</Text>
            <Text variant='error'>{ name }</Text>
        </View>
    );
};
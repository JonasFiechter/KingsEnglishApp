import React, { useContext } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/textComponent";

export const AdminScreen = () => {
    const { name } = useContext(AuthContext)
    return (
        <View>
            <Text variant='error'>Admin Screen WORKING!!!</Text>
            <Text variant='error'>{ name }</Text>
        </View>
    );
};
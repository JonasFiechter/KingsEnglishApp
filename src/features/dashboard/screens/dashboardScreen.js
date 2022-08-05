import React from "react";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { View } from "react-native";

function LogOutButton({title}) {
    const navigation = useNavigation();

    return (
        <Button title={title} onPress={() => {
            navigation.navigate('Login');
            }
        }/>
    )
}

export const DashboardScreen = () => {
    return (
        <View>
            <Text variant="error">Dashboard Screen WORKING!!!</Text>
            <LogOutButton title={'TitleTest'}/>
        </View>
    );
};
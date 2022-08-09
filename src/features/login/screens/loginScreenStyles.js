import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Button} from "react-native";
import { Text } from "../../../components/typography/textComponent";
import { useNavigation } from "@react-navigation/native"

export function LogInButton() {
    const navigation = useNavigation();
    
    return (
      <Button
        title="Login"
        onPress={() => { navigation.navigate('Navigation') }}
      />
    );
  }
  
export function SignUpButton() {
    const navigation = useNavigation();
    
    return (
      <Button
        title="SignUp"
        onPress={() => { navigation.navigate('KingsApp') }}
      />
    );
  }

export function KingsTitle() {
    return (
        <Text variant='title'>Welcome to KingsEnglishApp</Text>
    )
}

export const View = styled.View`
    flex: 1;
    background-color: #101044;
    flex-direction: column;
`;

export const FormContainer = styled.View`
    display: flex;
    align-items: center;
    top: 40%;
`;

export const UserInput = styled(TextInput).attrs()`
    width: 70%;
    margin: 5px;
    background-color: white;
`;

export const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


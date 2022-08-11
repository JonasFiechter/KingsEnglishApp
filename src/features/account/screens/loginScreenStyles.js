import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const LogInButton = styled(Button).attrs({
  color: colors.brand.primary
})`
    width: 60%;
    margin-bottom: 5px;
`;

export const Background = styled.View`
    flex: 1;
    align-items: center;
    justifyContent: center;
    flex-direction: column;
`;

export const KingsLogo = styled.Image.attrs({
    source: require('../../../../assets/logo_kings_001.png'),
})` 
    top: 20px;
    margin: 60px;
    flex: 1;
    resize-mode: contain;
`;

export const FormContainer = styled.View`
    flex-grow: 0.3;
    width: 90%;
`;

export const UserInput = styled(TextInput).attrs()`
    margin-bottom: 5px;
`;

export const ButtonsContainer = styled.View`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
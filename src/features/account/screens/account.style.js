import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const AuthButton = styled(Button).attrs({
    color: '#103164'
})`
    margin-bottom: 5px;
`;

export const Background = styled.View`
    alignItems: center; 
    flex: 1;
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

export const ButtonsContainer = styled.View`
    flex-grow: 0.3;
    width: 60%;
`;

export const VersionLabel = styled.Text`
    color: black;
`;
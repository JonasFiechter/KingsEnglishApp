import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const DashboardView = styled.View`
    flex: 1;
    background-color: gray;
`;

export const Content = styled.View`
    flex-grow: 0.6;
    background-color: ${(props) => props.theme.colors.bg.primary};
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const UserInfo = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const UserImage = styled.View`
    flex: 0.5;
    background-color: yellow;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const ButtonsContainer = styled.View`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: purple;
    width: 100%;
`;

export const LogoutButton = styled(Button).attrs({
    color: colors.bg.primary
})`
    background-color: ${(props) => props.theme.colors.brand.primary};
    width: 60%;
`;
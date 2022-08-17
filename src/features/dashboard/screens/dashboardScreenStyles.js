import styled from "styled-components/native";
import { SafeArea } from "../../../components/safeArea/SafeArea";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const DashboardView = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: gray;
    align-items: center;
    justify-content: center;
`;

export const Content = styled(SafeArea).attrs()`
    flex-grow: 0.3;
    background-color: ${(props) => props.theme.colors.bg.primary};
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonsContainer = styled.View`
    flex-grow: 0.3;
    width: 60%;
`;

export const LogoutButton = styled(Button).attrs({
    color: colors.bg.primary
})`
    background-color: ${(props) => props.theme.colors.brand.primary};
    width: 100%;
`;
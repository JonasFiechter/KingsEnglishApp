import styled from "styled-components/native";
import { TextInput } from "react-native";

export const View = styled.View`
    flex: 1;
    align-items: center;
    justify-items: center;
`;

export const FormContainer = styled.View`
    flex-grow: 1;
    background-color: red;
`;

export const UserEmail = styled(TextInput).attrs()`
    margin: 5px;
    background-color: gray;
`;

export const UserPassword = styled(TextInput).attrs()`
    margin: 5px;
    background-color: gray;
`;
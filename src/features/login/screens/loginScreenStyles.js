import styled from "styled-components/native";
import { TextInput } from "react-native";

export const View = styled.View`
    flex: 1;
    background-color: darkgreen;
`;

export const FormContainer = styled.View`
    display: flex;
    align-items: center;
    top: 40%;
    background-color: gray;
`;

export const UserInput = styled(TextInput).attrs()`
    width: 90%;
    margin: 5px;
    background-color: white;
`;
import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

export const SafeArea = styled.View`
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
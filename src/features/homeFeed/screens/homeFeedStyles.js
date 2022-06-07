import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";


export const FeedScreen = styled.SafeAreaView`
flex: 1px;
background-color: ${(props) => props.theme.colors.bg.tertiary};
padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const HeadSection = styled.View`
background-color: ${(props) => props.theme.colors.bg.tertiary};
padding: ${(props) => props.theme.sizes[1]};
`;

export const Body = styled.View`
flex: 1px;
background-color: ${(props) => props.theme.colors.ui.secondary};
`;

export const TailSection = styled.View`
flex: 1px;
flex-grow: 0.1;
`;
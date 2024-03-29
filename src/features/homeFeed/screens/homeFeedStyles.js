import styled from "styled-components/native";
import { FlatList } from "react-native"


export const PostList = styled(FlatList).attrs()`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const FeedScreen = styled.View`
flex: 1px;
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const HeadSection = styled.View`
flex: 1;
flex-direction: column;
align-items: center;
flex-grow: 0.05;
background-color: ${(props) => props.theme.colors.bg.primary};
padding-top: ${(props) => props.theme.sizes[0]};
`;

export const Body = styled.View`
flex: 1px;
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const TailSection = styled.View`
flex: 1px;
flex-grow: 0.1;
`;
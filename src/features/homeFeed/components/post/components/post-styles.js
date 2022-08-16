import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const PostCard = styled(Card)`
    flex: 1px;
    padding: ${(props) => props.theme.space[0]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const PostCover = styled(Card.Cover)`
    padding-botton: ${(props) => props.theme.space[2]};
`;

export const PostTitle = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[2]}; 
`;

export const PostDescription = styled.View`
    padding: ${(props) => props.theme.space[1]};
`;

export const PostFooter = styled.View`
    flex: 1;
    flex-direction: row-reverse;
    padding-left: ${(props) => props.theme.space[1]};
    padding-bottom: ${(props) => props.theme.space[3]};
`;
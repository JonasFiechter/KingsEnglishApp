import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const PostCard = styled(Card)`
    flex: 1px;
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const PostCover = styled(Card.Cover)`
    padding-botton: ${(props) => props.theme.space[1]};
`;
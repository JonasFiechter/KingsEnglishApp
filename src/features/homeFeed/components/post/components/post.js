import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const PostCard = styled(Card)`
    flex: 1px;
    padding: ${(props) => props.theme.space[2]};
`;

const PostCover = styled(Card.Cover)`
    padding-botton: ${(props) => props.theme.space[1]};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Post = ({ post={} }) => {
    const {
        title = 'Testing Title',
        cover = ['https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
    } = post;

    return (
        <PostCard>
            <PostCover source={{ uri: cover[0] }}/>
            <Title>{title}</Title>
        </PostCard>
    )
}
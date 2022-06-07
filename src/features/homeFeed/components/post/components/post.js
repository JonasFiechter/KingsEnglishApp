import React from "react";
import { Text } from "../../../../../components/typography/textComponent.js";
import { PostCard, PostCover } from './post-styles.js';

export const Post = ({ post={} }) => {
    const {
        title = 'Testing Title',
        cover = ['https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
    } = post;

    return (
        <PostCard>
            <PostCover source={{ uri: cover[0] }}/>
            <Text variant='title'>{title}</Text>
        </PostCard>
    );
};
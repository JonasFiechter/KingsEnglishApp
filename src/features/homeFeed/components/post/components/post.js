import React from "react";
import { Text } from "../../../../../components/typography/textComponent.js";
import { PostCard, PostCover, PostDescription } from './post-styles.js';

export const Post = ({ post={} }) => {
    const {
        title = 'Post Title',
        cover = ['https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
    } = post;

    return (
        <PostCard>
            <PostCover source={{ uri: cover[0] }}/>
            <PostDescription>
                <Text variant='label'>{title}</Text>
            </PostDescription>
        </PostCard>
    );
};
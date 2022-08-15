import React from "react";
import { Text } from "../../../../../components/typography/textComponent.js";
import { PostCard, PostCover, PostDescription, PostFooter, PostTitle } from './post-styles.js';

export const Post = ({ post }) => {

    return (
        <PostCard>
            <PostTitle>
                <Text variant='title'>{post.title}</Text>
            </PostTitle>
            <PostCover source={{ uri: post.cover[0] }}/>
            <PostDescription>
                <Text variant='body'>{post.description}</Text>
            </PostDescription>
            <PostFooter>
                <Text variant='caption'>{post.author}</Text>
            </PostFooter>
        </PostCard>
    );
};
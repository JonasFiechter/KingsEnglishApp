import React from "react";
import { Text } from "../../../../../components/typography/textComponent.js";
import { PostCard, PostCover, PostDescription, PostFooter, PostTitle } from './post-styles.js';

export const Post = ({ post={} }) => {
    const {
        title = 'Post Title',
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author = 'Standard Custom Author',
        cover = ['https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
    } = post;

    return (
        <PostCard>
            <PostTitle>
                <Text variant='title'>{title}</Text>
            </PostTitle>
            <PostCover source={{ uri: cover[0] }}/>
            <PostDescription>
                <Text variant='body'>{description}</Text>
            </PostDescription>
            <PostFooter>
                <Text variant='caption'>{author}</Text>
            </PostFooter>
        </PostCard>
    );
};
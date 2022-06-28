import React from "react";
import { Post } from "../components/post/components/post.js";
import { Text } from "../../../components/typography/textComponent.js";
import { 
    Body, FeedScreen, HeadSection, TailSection, PostList 
} from "./homeFeedStyles.js";


export const HomeFeed = () => {
    return (
        <FeedScreen>
            <HeadSection>
                <Text variant="title">Kings English School</Text>
            </HeadSection>
            <Body>
                <PostList
                    data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]}
                    renderItem={() => <Post/>}
                    keyExtractor={(item) => {item.id}}
                />
            </Body>
        </FeedScreen>
    );
};
import React from "react";
import { Post } from "../components/post/components/post.js";
import { Text } from "../../../components/typography/textComponent.js";
import { 
    Body, FeedScreen, HeadSection, TailSection 
} from "./homeFeedStyles.js";


export const HomeFeed = () => {
    return (
        <FeedScreen>
            <HeadSection>
                <Text variant="error">SECTION 1</Text>
            </HeadSection>
            <Body>
                <Post/>
            </Body>
            <TailSection>
                <Text variant="error">Third part!</Text>
            </TailSection>
        </FeedScreen>
    );
};
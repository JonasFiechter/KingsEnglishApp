import React from "react";
import { Post } from "../components/post/components/post.js";
import { Text } from "../../../components/typography/textComponent.js";
import { SafeArea } from "../../../components/safeArea/SafeArea.js";
import { 
    Body, FeedScreen, HeadSection, PostList
} from "./homeFeedStyles.js";


export const HomeFeed = () => {
    return (
        <SafeArea>
            <FeedScreen>
                <HeadSection>
                    <Text variant="error">Kings English School</Text>
                </HeadSection>
                <Body>
                    <PostList
                        data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]}
                        renderItem={() => <Post/>}
                        keyExtractor={(item) => {item.id}}
                    />
                </Body>
            </FeedScreen>
        </SafeArea>
    );
};
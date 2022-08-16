import React, { useContext, useEffect } from "react";
import { SafeArea } from "../../../components/safeArea/SafeArea.js";
import { 
    Body, FeedScreen, HeadSection, PostList
} from "./homeFeedStyles.js";
import { PostsContext } from "../../../services/posts/posts.context.js";
import { Post } from '../components/post/components/post'


//  The post screen and navigation functionality will be integrated soon.
export const HomeFeed = ({ navigation }) => {
    const { posts, setUpdate } = useContext(PostsContext)

    return (
        <SafeArea>
            <FeedScreen>
                <Body>
                    <PostList
                        data={posts}
                        renderItem={({item}) => <Post post={item}/>}
                        keyExtractor={(item) => {item.title}}
                    />
                </Body>
            </FeedScreen>
        </SafeArea>
    );
};
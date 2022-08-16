import React, { useContext } from "react";
import { SafeArea } from "../../../components/safeArea/SafeArea.js";
import { 
    Body, FeedScreen, HeadSection, PostList
} from "./homeFeedStyles.js";
import { PostsContext } from "../../../services/posts/posts.context.js";


//  The post screen and navigation functionality will be integrated soon.
export const HomeFeed = ({ navigation }) => {
    const { posts, update } = useContext(PostsContext)

    console.log(posts)

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
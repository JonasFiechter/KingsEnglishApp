import { useState, createContext } from "react";
import { postsRequest } from "./posts.service";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    // const results = postsRequest()
    // setPosts(results);
    const test = 'testt'

    return (
        <PostsContext.Provider
            value={{
                test,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};
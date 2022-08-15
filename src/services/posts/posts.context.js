import React, { useState, createContext } from "react";
import { postsRequest } from "./posts.service";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const results = postsRequest()
    setPosts(results)

    return (
        <PostsContext.Provider
            value={{
                posts,
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}
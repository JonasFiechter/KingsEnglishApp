import { useState, createContext, useEffect } from "react";
import { postsRequest } from "./posts.service";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [update, setUpdate] = useState(false)

    const retrievePosts = () => {
        setIsLoading(true);
        setPosts([]);

        setTimeout(() => {
            postsRequest()
            .then((results) => {
                setIsLoading(false)
                setPosts(results)
            });
        });
    };

    useEffect((update) => {
        update && retrievePosts()
    });

    return (
        <PostsContext.Provider
            value={{
                posts,
                isLoading,
                update,
                setUpdate,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};
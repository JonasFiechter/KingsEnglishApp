import { useState, createContext, useEffect } from "react";
import { postsRequest } from "./posts.service";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [update, setUpdate] = useState(false)

    function retrievePosts() {
        console.log('inside retrieve')
        setIsLoading(true);
        setPosts([]);

        setTimeout(() => {
            postsRequest()
                .then((results) => {
                    setIsLoading(false)
                    setPosts(results)
                });
        }, 2000);
    };

    useEffect(() => {
        retrievePosts()
    }, []);
  
    return (
        <PostsContext.Provider
            value={{
                posts,
                isLoading,
                setUpdate,
            }}
        >
            {children}
        </PostsContext.Provider>
    );
};
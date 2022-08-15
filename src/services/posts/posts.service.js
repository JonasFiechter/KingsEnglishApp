import posts from '../mock/posts.mock';

export function postsRequest() {
    return new Promise((resolve, reject) => {
        const mock = posts
        if (!mock) {
            reject('Not found!')
        }
        resolve(mock);
    });
};
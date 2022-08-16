import postsArray from '../mock/posts.mock.js';

export function postsRequest() {
    return new Promise((resolve, reject) => {
        const mock = postsArray
        if (!mock) {
            reject('Not found!')
        }
        resolve(mock);
    });
};
import postsArray from '../mock/posts.mock.js';

export function postsRequest() {
    console.log('calling postsRequest')
    return new Promise((resolve, reject) => {
        const mock = postsArray
        if (!mock) {
            reject('Not found!')
        }
        resolve(mock);
    });
};
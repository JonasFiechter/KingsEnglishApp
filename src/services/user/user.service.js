export function userRequest() {
    return new Promise((resolve, reject) => {
        const mock = postsArray
        if (!mock) {
            reject('Not found!')
        }
        resolve(mock);
    });
};
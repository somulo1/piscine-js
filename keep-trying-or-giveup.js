// const retry = (count, cb) => {
//     let i = 0
//     return async function again(...args) {
//         return await cb(...args).catch(err => {
//             if (i >= count) throw err
//             i++
//             return again(...args)
//         })
//     }
// }
// const timeout = (delay, cb) => {
//     return async (...args) => {
//         const timer = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(new Error('timeout'))
//             }, delay)
//         })
//         return Promise.race([cb(...args), timer]).then(value => {
//             if (Object.entries(value).length) return value
//             throw value
//         })
//     }
// }
const retry = (maxRetries, callback) => {
    let attempts = 0;
    return async function attempt(...params) {
        return await callback(...params).catch(err => {
            if (attempts >= maxRetries) throw err;
            attempts++;
            return attempt(...params);
        });
    };
};
const timeout = (timeoutDuration, callback) => {
    return async (...params) => {
        const timerPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(new Error('timeout'));
            }, timeoutDuration);
        });
        return Promise.race([callback(...params), timerPromise]).then(value => {
            if (Object.entries(value).length) return value;
            throw value;
        });
    };
};

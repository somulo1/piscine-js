function throttle(func, delay) {
    let wait = false;
    let waitArgs;
    const timeOutFunc = () => {
        if (waitArgs == null) {
            wait = false
        } else {
            func(...waitArgs)
            waitArgs = null
            setTimeout(timeOutFunc, delay)
        }
    }

    return function(...args) {
        if (wait) {
            waitArgs = args
            return
        }

        func(...args)
        wait = true

        setTimeout(timeOutFunc, delay)
    }
}

function opThrottle(func, delay, {leading = false, trailing = true} = {}) {
    let timeout = null;
    let last = 0;
    return function(...args) {
        const now = +new Date();
        if (!last && leading === false) {
            last = now;
        }

        if (now - last > delay) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null;
            }

            func.apply(this, args);
            last = now;
        } else if (!timeout && trailing === false) {
            timeout = setTimeout(() => {
                func.apply(this, args);
                last = +new Date();
                timeout = null;
            }, delay)
        }
    };
}

// function basicTestThrottle() {
//     const throttledFunc = throttle(() => console.log('Throttled!'), 2000);

//     console.log("Starting test for throttle...");

//     // Invoke multiple times in quick succession
//     throttledFunc();
//     throttledFunc();
//     throttledFunc();

//     // Should only log 'Throttled!' immediately once, 
//     // then once again after 2 seconds if another call is made
//     setTimeout(() => throttledFunc(), 2500);  // After 2.5s
//     setTimeout(() => throttledFunc(), 3000);  // After 3s
// }

// // Call the test function
// basicTestThrottle();
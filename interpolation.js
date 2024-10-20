function interpolation({step = 0, start = 0, end = 0, callback = () => {}, duration = 0} = {}) {
    const stepSize = (end - start) / step
    const delaySize = duration / step
    let curr = start
    let i = 0;
    const timeout = setInterval(() => {
        if (i < step) {
            callback([curr, delaySize * (i + 1)]);
            curr += stepSize;
            i++;
        } else {
            clearInterval(timeout);
        }
    }, delaySize)
}
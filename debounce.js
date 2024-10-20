function debounce(func, delay) {
    let timeOut;
    return function(...args) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => func.apply(this, args), delay)
    };
}

function opDebounce(func, delay, option = {}) {
    let timeOut;

    return function(...args) {
        if (option.leading && !timeOut) {
            func.apply(this, args)
        }

        if (timeOut) {
            clearTimeout(timeOut);
        }

        function later() {
            func.apply(this, args);
        };

        timeOut = setTimeout(later, delay)
    };
}


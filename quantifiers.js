
function every(arr, func) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (!func(arr[i])) {
                return false;
            }
        }
    }
    return true;
}

function some(arr, func) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i])) {
                return true;
            }
        }
    }
    return false;
}

function none(arr, func) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i])) {
                return false;
            }
        }
    }
    return true;
}
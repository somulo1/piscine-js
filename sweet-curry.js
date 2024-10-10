function mult2(arg1) {
    return function(arg2) {
        return arg1 * arg2
    };
}

function add3(arg1) {
    return function(arg2) {
        return function(arg3) {
            return arg1 + arg2 + arg3
        };
    };
}

function sub4(arg1) {
    return function(arg2) {
        return function(arg3) {
            return function(arg4) {
                return arg1 - arg2 - arg3 -arg4;
            };
        };
    };
}
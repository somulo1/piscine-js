function reverse(input) {
    let res
    if (typeof input === "string") {
        res = ""
        for (let i = input.length-1; i >= 0; i--) {
            res += input[i]
        }
    }
    if (Array.isArray(input)) {
        res = []
        for (let i = input.length-1; i >= 0; i--) {
            res.push(input[i])
        }
    }
    return res
}
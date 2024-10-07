// 1. Check if the date is valid
function isValid(date) {
    return date instanceof Date && !isNaN(date);
}

// 2. Check if the first date is after the second
function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false;
    return date1 > date2;
}

// 3. Check if the first date is before the second
function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false;
    return date1 < date2;
}

// 4. Check if the date is in the future
function isFuture(date) {
    if (!isValid(date)) return false;
    const now = new Date();
    return date > now;
}

// 5. Check if the date is in the past
function isPast(date) {
    if (!isValid(date)) return false;
    const now = new Date();
    return date < now;
}
// const date1 = new Date('2024-10-8');
// const date2 = new Date('2023-10-8');

// console.log(isValid(date1)); // true
// console.log(isAfter(date1, date2)); // true
// console.log(isBefore(date2, date1)); // true
// console.log(isFuture(date1)); // true
// console.log(isPast(date2)); // true


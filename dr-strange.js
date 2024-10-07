function addWeek(date) {
    const epoch = new Date('0001-01-01'); // Epoch: Monday (day 0)
    const msInADay = 86400000; // Number of milliseconds in a day

    // Calculate the total days since the epoch
    const daysSinceEpoch = Math.floor((date - epoch) / msInADay);

    // Map days to the new 14-day week format
    const dayNames = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 
        'secondFriday', 'secondSaturday', 'secondSunday'
    ];

    // Get the current day in the 14-day week (using modulo 14)
    const dayIndex = daysSinceEpoch % 14;

    return dayNames[dayIndex];
}

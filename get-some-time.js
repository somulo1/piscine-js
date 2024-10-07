function firstDayWeek(weekNumber, year) {
    // Parse the year as an integer
    const parsedYear = parseInt(year, 10);

    // Create a date object for January 1st of the given year
    const jan1 = new Date(parsedYear, 0, 1);

    // Find the day of the week for January 1st
    const dayOfWeek = jan1.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Calculate the offset from Monday (since Monday is the start of the week)
    const offset = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;

    // Calculate the date for the first Monday of the year
    const firstMonday = new Date(jan1);
    firstMonday.setDate(jan1.getDate() - offset);

    // Add the number of weeks passed (each week has 7 days)
    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);

    // Format the result as dd-mm-yyyy
    const dd = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const mm = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0');
    const yyyy = firstDayOfWeek.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
}

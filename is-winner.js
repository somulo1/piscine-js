
async function isWinner(country) {
    let hasError = false; // Renamed for clarity
    const winnerCountries = await db.getWinner(country).catch(() => hasError = true); // Renamed for clarity
    if (hasError || !winnerCountries) return `${country} never was a winner`;
    
    if (winnerCountries.continent !== "Europe") {
        return `${country} is not what we are looking for because of the continent`;
    }
    const winnerResults = await db.getResults(winnerCountries.id); // Renamed for clarity
    if (winnerResults.length < 3) {
        return `${country} is not what we are looking for because of the number of times it was champion`;
    }
    // Using map to build arrays for years and results
    const yearsArray = winnerResults.map(result => result.year);
    const resultsArray = winnerResults.map(result => result.score);
    
    // Joining the arrays into strings
    const years = yearsArray.join(", ");
    const results = resultsArray.join(", ");
    
    return `${country} won the FIFA World Cup in ${years} winning by ${results}`;
}


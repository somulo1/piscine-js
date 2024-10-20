async function isWinner(country) {
    try {
        let countryResult = await db.getWinner(country);
        if (countryResult instanceof Error) {
            return `${country} never was a winner`;
        }
        country = countryResult;
        if (country.continent !== 'Europe') {
            return `${country.name} is not what we are looking for because of the continent`;
        }
        let result = await db.getResults(country.id);
        if (result === Error('Results found')) {
        return `${country.name} never was a winner`;
        }
        if (result.length < 3) {
            return `${country.name} is not what we are looking for because of the number of times it was champion`;
        }
        return (
            `${country.name} won the FIFA World Cup in ` + result.map((result) => result.year).join(', ') +
        ' winning by ' + result.map((result) => result.score).join(', ')
        )

    } catch (e) {
            return `${country} never was a winner`;
    }
}
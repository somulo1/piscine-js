function hasCity(country, cities) {
    return function(city) {
        return cities.includes(city) ? `${city} is a city in ${country}` : `${city} is not a city in ${country}`;
    }
}

// const chineseCities = ['Beijing', 'Shanghai', 'Wuhan', 'Shenzhen', 'Tianjin', 'Chengdu'];
// const isChinese = hasCity('China', chineseCities);
// console.log(isChinese('Beijing'))//beijing is a city in china
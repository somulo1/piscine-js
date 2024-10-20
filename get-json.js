async function getJSON(path = '', params = {}) {
    const url = path + '?' + Object.keys(params).map((key) => {
            return (
                key.replace(' ', '+') +
                '=' +
                params[key].toString().replace(' ', '+')
            );
        })
        .join('&');
const result = await fetch(url).then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
});
if (result.error) {
    throw new Error(result.error);
}
return result.data;
}
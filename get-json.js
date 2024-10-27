async function getJSON(path, params = {}) {
    // Construct query string from params
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${path}?${queryString}` : path;
    // Make the fetch request
    const response = await fetch(url);
    // Check if the response is not OK
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    // Parse the response body from JSON
    const result = await response.json();
    // Check for data or error in the parsed response
    if (result.error) {
        throw new Error(result.error);
    }
    return result.data;
}

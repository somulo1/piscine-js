async function queryServers(serverName, q) {
    // Construct the two URLs without any leading space
    const url1 = `/${serverName}?q=${encodeURIComponent(q)}`;
    const url2 = `/${serverName}_backup?q=${encodeURIComponent(q)}`;
    // Define an array of promises to fetch from both URLs
    const fetchPromises = [getJSON(url1), getJSON(url2)];
    // Return the result of the fastest promise
    return Promise.race(fetchPromises);
}
async function gougleSearch(q) {
    // Create an array of server names
    const servers = ["web", "image", "video"];
    const fetchPromises = servers.map(server => queryServers(server, q));
    // Create a timeout promise that resolves after 80 milliseconds
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('timeout')), 80);
    });
    try {
        // Use Promise.race to return the result from the first server to respond
        const results = await Promise.race([
            Promise.all(fetchPromises),
            timeoutPromise,
        ]);
        // Construct the result object
        const resultObject = {};
        servers.forEach((server, index) => {
            resultObject[server] = results[index];
        });
        
        return resultObject;
    } catch (error) {
        if (error.message === 'timeout') {
            throw new Error('timeout');
        }
        // Handle any other errors (like from queryServers)
        throw error;
    }
}


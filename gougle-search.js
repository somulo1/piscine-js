async function queryServers(serverName, q) {
    const url1 = `/${serverName}?q=${q}`;
    const url2 = `/${serverName}_backup?q=${q}`;

    return Promise.race([
        getJSON(url1),
        getJSON(url2),
    ])
}

async function gougleSearch(q) {
    const servers = ['web', 'image', 'video'];

    try {
        const result = await Promise.race([
            Promise.all(servers.map(server => queryServers(server, q))),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 80))
        ]);

        return Object.fromEntries(servers.map((server, index) => [server, result[index]]));
    } catch (error) {
        if (error.message === 'timeout') {
            throw error;
        }

        throw error;
    }
}
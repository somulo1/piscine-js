import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'application/json'});
    
})
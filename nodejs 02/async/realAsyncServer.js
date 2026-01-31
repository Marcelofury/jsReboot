const http = require('http');

const server = http.createServer(async (req, res) => {
    if (req.url === '/'){
        res.end('Home');
    } else if (req.url === '/data'){
        res.end(JSON.stringify({mesage: 'hello API'}));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});


server.listen(3000, () => {
    console.log('Server running on port 3000');
})

// This is a backend foundation
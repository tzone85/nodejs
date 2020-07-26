const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>MEnter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
    
        // streaming of data in chucks (buffer)
        const body = [];
        req.on('data', (chunck) => {
            console.log(chunck);
            body.push(chunck);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('msg.txt', message, (err) => {
                // if there was a possible error ... it would be handled here, gracefully
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });
    }
    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hellow from Node.js Server</h1></body>');
    res.write('</html>');
    
    res.end();
}


module.exports = requestHandler;
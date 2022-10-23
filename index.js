var http = require('http'); // Import Node.js core module
var fs = require('fs');

const server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/' || req.url =='') { //check the URL of the current request
        
        var file = __dirname + '/goodpod_home.html';  //this index.html contains script tag
        var stat = fs.statSync(file);
        console.log('server has rerun!')
        
        res.writeHead(200, {
          'Content-Type': 'text/html'
        }); 
        
        // x  console.log(file)
        fs.createReadStream(file).pipe(res);
        //readStream.pipe(res);
        
        // set response content    
        //res.write('<html><body><p>This is home Page.</p></body></html>');
        //res.end();
    
    }
    else
        res.end('Invalid Request!');
});

server.listen(8000); //6 - listen for any incoming requests

console.log('Node.js web server at port 8000 is running..')
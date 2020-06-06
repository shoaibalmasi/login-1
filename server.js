const http = require('http');
const fs = require('fs');


//create server
http.createServer((req, res) => {
      //get index
   if (req.url === '/index' && req.method === 'GET') {
      fs.readFile('public/index.html', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
      //get script.js
   } else if (req.url === '/script.js' && req.method === 'GET') {
      fs.readFile('public/script.js', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
      // get jquery.js
   } else if (req.url === '/jquery-3.4.1.js' && req.method === 'GET') {
      fs.readFile('public/jquery-3.4.1.js', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
      // get style.css
   } else if (req.url === '/style.css' && req.method === 'GET') {
      fs.readFile('public/style.css', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })
      // get image
   } else if (req.url === '/8854.jpg' && req.method === 'GET') {
      fs.readFile('public/8854.jpg', (err, data) => {
         if (err) throw err;
         res.write(data);
         res.end();
      })

      //checking user info in /login
   } else if (req.url === '/login' && req.method === 'POST') {
      req.on('data', function (chunk) {
         let status=false;
         let user = chunk.toString();
         user = JSON.parse(user);
         fs.readFile('public/users.json', 'utf8', (err, data) => {
            if (err) throw err;

            data = JSON.parse(data);
            for (const key in data) {
               if (JSON.stringify(user) === JSON.stringify(data[key])) {

                  res.write("true");
                  res.end();
                  status=true;
                  break;
               } 
            }
            if(status===false) {
               res.write("false");
               res.end();
            }
         });
      })

   } else {
      res.write('Not Found')
      res.end();
   }


}).listen(5010);
console.log("server is listening");
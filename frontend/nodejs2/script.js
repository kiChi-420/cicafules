bombajo()
function bombajo(){
    for(let i = 0; i < 4; i++){
        console.log("🚶🍊 <-- 💣✅");
    }
}

//wrapper function
//function wrapper(__dirname, __filename, require, exports, module){
    // console.log(__dirname)
    // console.log(__filename)
    // console.log(exports)
    // console.log(require)
    // console.log(module)
    //}

    const add = require('./calculator.js')
    console.log(add(1, 2))

    const http = require('http')

    const fs = require('fs');
    const server = http.createServer((req, res) => {
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'html'});
            res.end(data);
        });
    })

server.listen(8080);
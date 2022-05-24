const http = require("http");
const fs = require("fs");



http.createServer(async (request, response) => {

 



    response.writeHead(400, { 'Content-Type': 'application/json' });
    let json =
    {
        ErrorDesc: "400 Error"
    };
    response.end(JSON.stringify(json));

}).listen(5500, () => console.log("Сервер на порте http://localhost:5500"));




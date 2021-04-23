let express = require('express');
let http = require('http')
let crypto = require("crypto")


let app = express();
let port = 5050;

app.use("/webpush", express.static("./",{index:"index.html"}));

http.createServer(app).listen(port, (error) => {
    if (error) {
        console.error(error)
        return process.exit(1)
    } else {
        console.log('http://localhost:' + port + '/webpush/#')
    }
})

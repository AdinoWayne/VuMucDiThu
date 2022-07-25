var request = require("request");
var qs = require("query-string");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require('cors');


const API_SERVICE_URL = "https://mobile.ajpark.co.kr";

var app = express();
var server = require("http").Server(app);
var port = process.env.PORT || 4000;

let multer = require('multer');
let upload = multer();
app.use(cors({
	origin: '*'
}));
// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var cookie = 'AWSALBCORS=6iHy3+mNkXbNKwkoQlMYjO02ZnpJADbKa2+f/1NAC74nYQ3t/8ff4KqKPdoUS2DjiFaWj1gRmK0dp0hT+zYS0/tTq/AgoOK0ONZmTgIFNZIPgIfD2cYrNYBiUwoD; Path=/; Secure; Expires=Wed, 27 Jul 2022 02:58:59 GMT;AWSALB=6iHy3+mNkXbNKwkoQlMYjO02ZnpJADbKa2+f/1NAC74nYQ3t/8ff4KqKPdoUS2DjiFaWj1gRmK0dp0hT+zYS0/tTq/AgoOK0ONZmTgIFNZIPgIfD2cYrNYBiUwoD; Path=/; Expires=Wed, 27 Jul 2022 02:58:59 GMT;AWSALB=6iHy3+mNkXbNKwkoQlMYjO02ZnpJADbKa2+f/1NAC74nYQ3t/8ff4KqKPdoUS2DjiFaWj1gRmK0dp0hT+zYS0/tTq/AgoOK0ONZmTgIFNZIPgIfD2cYrNYBiUwoD; Path=/; Expires=Wed, 27 Jul 2022 02:58:59 GMT;encUserId="Ju8uyS+hRsk="; Path=/;'

app.post('*', upload.fields([]),function(req, res) {
	const url = req.url;
	const options = {
		url: `${API_SERVICE_URL}${url}`,
		method: "POST",
		headers: {
			Cookie: cookie,
			'Content-Type':'application/x-www-form-urlencoded',
			'Accept':'application/json'
		},
	}
	if(Object.keys(req.body).length > 0  ) {
		options.body = qs.stringify(req.body);
	}

	request(options, function(error, response, body){
		res.json(JSON.parse(body))
	})
})


server.listen(port, () => {
	console.log("Listening on port: " + port);
});



// package.json

{
  "name": "proxy_server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "form-data": "^4.0.0",
    "http": "^0.0.1-security",
    "http-proxy-middleware": "^2.0.6",
    "multer": "^1.4.5-lts.1",
    "mysql": "^2.18.1",
    "query-string": "^7.1.1",
    "request": "^2.88.2"
  }
}


var request = require("request");
var qs = require("query-string");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require('cors');
const http = require('http');
const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {}
})


const API_SERVICE_URL = "https://mobile.ajpark.co.kr";

var app = express();
var server = require("http").Server(app);
var port = process.env.PORT || 4000;

app.use(cors({
	origin: '*'
}));
// to support JSON-encoded bodies
app.use(bodyParser.json());
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// var cookie = 'AWSALBCORS=6iHy3+mNkXbNKwkoQlMYjO02ZnpJADbKa2+f/1NAC74nYQ3t/8ff4KqKPdoUS2DjiFaWj1gRmK0dp0hT+zYS0/tTq/AgoOK0ONZmTgIFNZIPgIfD2cYrNYBiUwoD; Path=/; Secure; Expires=Wed, 27 Jul 2022 02:58:59 GMT;AWSALB=6iHy3+mNkXbNKwkoQlMYjO02ZnpJADbKa2+f/1NAC74nYQ3t/8ff4KqKPdoUS2DjiFaWj1gRmK0dp0hT+zYS0/tTq/AgoOK0ONZmTgIFNZIPgIfD2cYrNYBiUwoD; Path=/; Expires=Wed, 27 Jul 2022 02:58:59 GMT;AWSALB=6iHy3+mNkXbNKwkoQlMYjO02ZnpJADbKa2+f/1NAC74nYQ3t/8ff4KqKPdoUS2DjiFaWj1gRmK0dp0hT+zYS0/tTq/AgoOK0ONZmTgIFNZIPgIfD2cYrNYBiUwoD; Path=/; Expires=Wed, 27 Jul 2022 02:58:59 GMT;encUserId="Ju8uyS+hRsk="; Path=/;'
var cookie = null;

app.post('/api/parkingLot/partner/update*', upload.single('image'), upload.array('extra'), (req, res, next) => {

    var header = req.headers['content-type'];

    function newObj(
		name,
		storeName,
		partnerId,
		tel,
		subTel,
		addr1,
		addr2,
		image
		){
        return{
            storeName: storeName,
            partnerId: partnerId,
            name: name,
            tel: tel,
            subTel: subTel,
            addr1: addr1,
            addr2: addr2,
            image: {
                value: image.buffer,
                options: image.originalname
            }
        }
    }
    
    const options = {
        url: url,
        method: 'POST',
        headers:{
			...headers,
            'Content-Type': header,
			'Cookie': cookie
        },
        "formData": newObj(
			req.body.storeName,
			req.body.partnerId,
			req.body.name,
			req.body.tel,
			req.body.subTel,
			req.body.addr1,
			req.body.addr2,
			req.files[0],
			req.files[1]
		),
    }
    request(options, (err, rez, body) => {
        if (err){
            res.send(err)
        }
        if(rez){
            res.send(rez)
        }
    })
})

app.post('*', upload.fields([]),function(req, res) {
	console.log(cookie)
	console.log('\n\n')
	const url = req.url;

	let headers = {
		'Content-Type':'application/x-www-form-urlencoded',
		'Accept':'application/json'
	}

	if(!url.includes('login')) {
		headers = {
			...headers,
			Cookie: cookie
		}
	}

	const options = {
		url: `${API_SERVICE_URL}${url}`,
		method: "POST",
		headers,
	}
	if(Object.keys(req.body).length > 0  ) {
		options.body = qs.stringify(req.body);
	}

	request(options, function(error, response, body){
		if(response.request.href.includes('/api/public/user/login')) {
			cookie = response.headers["set-cookie"].toString();
			console.log('cookie in login:\n' + cookie)
			console.log('\n\n')
		}
		res.json(JSON.parse(body))
	})
})


server.listen(port, () => {
	console.log("Listening on port: " + port);
});

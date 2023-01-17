const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
// defining an array to work as the database (temporary solution)
const ads = [{ title: "Hello, world (again)!" }];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/", (req, res) => {
   // SMS 발송: POST /api/v1/message/sms

   res.send(ads);
});

// 국내 메세지
app.post("/sejong/message", (req, res) => {
   console.log(req.query);
});

// 국외 메세지
app.post("/sejong/isms", (req, res) => {
   console.log(req);
   res(req);
});

// 알림톡
app.post("/sejong/alimtalk", (req, res) => {
   console.log(req.query);
});

// 친구톡
app.post("/sejong/friendtalk", (req, res) => {
   console.log(req.query);
});

// starting the server
app.listen(10803, () => {
   console.log(dotenv.config());
   console.log("listening on port 10803");
});

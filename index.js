require('newrelic');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const https = require('https')
const db = require('./db');

const server = createServer();

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,token');
//   next();
// }
// server.use(allowCrossDomain);
// app.use(cors({
//   origin: true,
//   credentials: true,
// }));


server.start(
  {
    cors: {
      credentials: true,
      origin: ['https://andersonleitegithubcom.andersonleite.now.sh','http://localhost:7777']
    },
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);

setInterval(()=>{
  https.get('https://andersonleitegithubcom.andersonleite.now.sh', (res) => {
    console.log(res.statusCode);
  })
}, 30000)

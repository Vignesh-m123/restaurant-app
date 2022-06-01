const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const { json } = require('express')
const port = 5000


// parse various different custom JSON types as JSON
app.use(cors())
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: true }));



const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  // password : 'pass',
  database : 'restaurant_location'
});
con.connect((err) =>{
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + con.threadId,'conneced db to mysql');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/postLocation', (req, res) => {
  //send to mysql
  console.log(req.body);
  // const sql = "INSERT INTO location_details (latitude,longitude) VALUES ?";
  // con.query(sql,[], function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });
    res.sendStatus(200)
  })

  app.get('/getPast', (req, res) => {
    //getting last 10 records from mysql
  //   SELECT * FROM (
  //     SELECT * FROM yourTableName ORDER BY id DESC LIMIT 10
  //  )Var1
  //     ORDER BY id ASC;
  con.
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
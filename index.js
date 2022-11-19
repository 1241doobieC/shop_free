const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var db = require('./db.js');

const router = express.Router();
const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function getAllUser() {
  let queryResult = await db.query('Select * from user_login_data;');
  return queryResult.rows;
};
async function checkValid(email){
  let queryResult = await db.query('Select email from user_login_data where email = $1;', [email]);
  return queryResult.rows;
}

app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname+'/public/login.html'));
});

app.get('/listUsers', async (req, res) => {
  var allUsers = await getAllUser();
  // console.log('testing result: ', allUsers)
  res.json({ result: allUsers});
});

app.get('/createUser' , (req, res) => {
  res.sendFile(path.join(__dirname + '/public/register.html'))
})
app.post('/createUser', async (req, res) => {
  const { username, email, psd, cfm_psd } = req.body;
  if(psd != cfm_psd) 
  {
    res.send("密碼不一致。");
    return;
  }
  var num_exist = await checkValid(email);
  if(num_exist != 0) 
  {
    res.send("信箱已使用。");
    return;
  }
  else
  {
    let insertData = await db.query("Insert into user_login_data(username, passwordHash, email, created_on) values($1, $2, $3, CURRENT_TIMESTAMP)",
    [username, psd, email]);
    res.redirect(`http://localhost:3000/listUsers`);
  }
  
});

app.post('/login', async(req, res) => {
  const {email, psd } = req.body;
});
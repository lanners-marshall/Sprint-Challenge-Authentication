const axios = require('axios');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const knex = require('knex')
const dbConfig = require('../knexfile')
const db = knex(dbConfig.development)

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

const jwtKey = require('../_secrets/keys').jwtKey;

const secret = jwtKey;

function generateToken(user){

  const payload = {
    username: user.username,
  };

  const options = {
    expiresIn: '1h',
    jwtid: '12345' //jti
  }

  return jwt.sign(payload, secret, options)
}

function register(req, res) {
  const creds = req.body
  
  let e1 = '';
  let e2 = '';
  let bol = false;

  if (creds.password.length < 5){
    e1 = 'password must be 5 characters in length';
    bol = true;
  }

  if (creds.username.length < 5){
    e2 = 'username must be 5 characters in length';
    bol = true;
  }

  //if form not filled out correctly end and send error msg
  if (bol === true){
    res.status(400).json({error1: e1, error2: e2})
  }

  //if form is filled out correctly add user and give token
  if (bol === false){

  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;

  db('users')
    .insert(creds)
    .then(ids => {
      const id = ids[0]
      
      db('users') 
        .where({id})
        .first()
        .then(user => {
          const token = generateToken(user);
          res.status(200).json({token}) 
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({msg: 'error generating token'})
        })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({msg: "there was an error registering user"})
    })
  }
  
}


function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
    .where({username: creds.username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({token})
      } else {
        res.status(401).json({msg: 'You have failed to log in'})
      } 
    })
}


function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

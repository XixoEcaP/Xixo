// src/auth.js
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const cors = require('cors');
const app = express();

const client_id = 'cfa9ac02e83449959ce333e78ecfddaa'; // Your Client ID
const client_secret = 'ad183804205b4301bb05730bac55625e'; // Your Client Secret
const redirect_uri = 'http://localhost:3001/callback'; // Ensure this matches your setup

app.use(cors());

app.get('/login', (req, res) => {
  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    }));
});

app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.json({ access_token: access_token });
    } else {
      console.error('Failed to retrieve access token:', body);
      res.status(response.statusCode).json({ error: 'Failed to retrieve access token' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});





const express = require('express');
const Artitalk = require('@Artitalk/vercel');
const app = express();
const callback = Artitalk({ 
  env: 'deta'
});

app.all(/.*/, callback);
module.exports = app;

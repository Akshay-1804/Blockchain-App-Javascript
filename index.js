const express = require('express');
const BA = express();
BA.get('/',(req,res) => res.send('Welcome to Blockchain'))
BA.listen('5000',()=>console.log ('Server started on port 5000'))
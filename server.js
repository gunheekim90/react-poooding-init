const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  	console.log("들어왔따");
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(80,function(){
    console.log('react server on!')
})
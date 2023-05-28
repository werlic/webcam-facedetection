require('dotenv').config()
const path = require('path')
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, { cors: true });
const cors = require('cors')
const cv = require('@techstark/opencv-js');

app.use(express.static(path.join(__dirname)+'/public'));
app.use(cors({ origin: '*' }))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

io.on('connect', (req, res) => {
  console.log('Connected user')
})

io.on('image', (image) => {
  console.log(image);
})


const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log('Server listening on port ' + port);
  console.log('URL: http://localhost:' + port);
})
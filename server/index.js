import path from 'path';
import express from 'express';

// Setup
const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, '..', 'public')));
server.use(express.static(path.join(__dirname, '..', 'dist')));

// Routes
server.get('/', (req, res) => res.render('index'));

// Run server
server.listen(4444);
console.log('Running on localhost:4444');
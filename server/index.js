import path from 'path';
import express from 'express';
import courseData from '../app/data/course';
import shapesData from '../app/data/shapes';

// Setup
const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, '..', 'public')));

// TODO: Should probably handle this as part of build step
// Data
server.get('/data/course.json', (req, res) => res.json(courseData));
server.get('/data/shapes.json', (req, res) => res.json(shapesData));

// App Routes
server.get(['/', '/level/*'], (req, res) => res.render('index'));

// Run server
server.listen(4444);
console.log('Running on localhost:4444');
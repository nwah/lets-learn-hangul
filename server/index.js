import path from 'path';
import fs from 'fs';
import express from 'express';
import courseData from '../app/data/course';
import shapesData from '../app/data/shapes';
import jamosData from '../app/data/jamos';
import wordsData from '../app/data/words';
import { processText } from '../app/utils/text';

// Setup
const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, '..', 'public')));

// TODO: Should probably handle this as part of build step
// Data
server.get('/data/course.json', (req, res) => res.json(
  courseData.map(lvl => ({
    ...lvl,
    text: processText(lvl.text),
    rounds: lvl.rounds.map(rnd => ({
      ...rnd,
      text: processText(rnd.text)
    }))
  }))
));
server.get('/data/shapes.json', (req, res) => res.json(shapesData));
server.get('/data/jamos.json', (req, res) => res.json(jamosData));
server.get('/data/words.json', (req, res) => res.json(wordsData));

// App Routes
server.get(['/', '/level/*'], (req, res) => res.render('index'));

// Run server
server.listen(4444);
console.log('Running on localhost:4444');
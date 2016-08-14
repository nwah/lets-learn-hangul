import path from 'path';
import fs from 'fs';
import express from 'express';
import basicauth from 'basicauth-middleware';
import compression from 'compression';
import courseData from '../app/data/course';
import shapesData from '../app/data/shapes';
import jamosData from '../app/data/jamos';
import geometricData from '../app/data/geometric';
import wordsData from '../app/data/words';
import { processText } from '../app/utils/text';

// Setup
const env = process.env.NODE_ENV || 'development';
const server = express();

server.set('port', (process.env.PORT || 4444));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(compression());
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
server.get('/data/geometric.json', (req, res) => res.json(geometricData));
server.get('/data/words.json', (req, res) => res.json(wordsData));

if (env === 'production') {
  server.use('/', basicauth('hangul', 'hangul'));
  server.use('/level/*', basicauth('hangul', 'hangul'));
  server.use(['/learnedemall', '/learnedeverything', '/return', '/nowwhat'], basicauth('hangul', 'hangul'));
}

const indexHtml = fs.readFileSync(path.join(__dirname, 'cached-home.html'), 'utf8');

// App Routes
server.get('/', (req, res) => {
  res.render('index', {env, html: indexHtml});
});

server.get(
  ['/level/*', '/learnedemall', '/learnedeverything', '/return', '/nowwhat'],
  (req, res) => res.render('index', {env})
);

// Run server
server.listen(server.get('port'));
console.log(`Running on port ${server.get('port')}`);
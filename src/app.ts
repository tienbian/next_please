import express from 'express';
import {connect} from './db/db';
import dotenv from 'dotenv';
import {Movie} from './db/models/Movie';

dotenv.config();
connect();

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/movies', async (req,res) => {
  const movie = new Movie();
  movie.title = req.body.title;
  movie.plot_summary = req.body.plot_summary;
  movie.duration = req.body.duration;
  await movie.save();
  res.send(movie);
});

export {app};

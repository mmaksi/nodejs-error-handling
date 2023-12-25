import express from 'express';
import {
  httpSignIn,
  httpSignOut,
  httpSignUp,
} from './controllers/users.controller';
import { errorHandler } from './middlewares/errorHandler.middleware';

const app = express();
app.use(express.json());

app.get('/signup', httpSignUp);
app.get('/signin', httpSignIn);
app.get('/signout', httpSignOut);

app.all('*', () => {
  throw new Error();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Listening on port 3000!`);
});

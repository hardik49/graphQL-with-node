import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import schema from './src/schema/schema';
import appConfig from './src/config/config'
import mongoose from 'mongoose';
const { mongoURI } = require('./src/config/db');
const app = express();

app.use(cors({
  origin: '*',
}));

mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to database ...');
}
).on('error', (error) => {
  console.log('Error connecting to database', error);
}
);

// graphqlHTTP is a middleware that will handle the request
app.use('/graphql', graphqlHTTP({
  // need schema
  schema,
  graphiql: true,
}));

app.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port} ...`);
});

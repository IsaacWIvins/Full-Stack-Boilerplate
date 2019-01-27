import Schema from './graphql/schema.js';
import Resolvers from './graphql/resolvers.js';
import models from './models/index.js';
import { createServer } from 'http';
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

//defaults
const app = express();
const GRAPHQL_PORT = 8080;

// combine imported Schema and Resolvers
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

// set new Schema to the /graphql endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
  schema: executableSchema,
  context: (item) => {
    console.log(`Context is being fired off on the server!`, request.user);
  },
  tracing: true,
  cacheControl: true
})));

// synch to database, add event listener to /graphiql endpoint for testing
models.sequelize.sync()
  .then(function () {
    const appServer = createServer(app);
    appServer.listen(GRAPHQL_PORT, () => {
      console.log(`GraphQL Server is now running on ${GRAPHQL_PORT}`)
      app.use('/graphiql', graphiqlExpress({
        endpointURL: `/graphql`,
      }));
    });
  })
  .catch(function (e) {
    throw new Error(e);
  });


module.exports = app;

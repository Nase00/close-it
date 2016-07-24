/* eslint no-console:0 */
/* globals console */
import Koa from 'koa';

import router from './routes';

const server = new Koa();
const port = process.env.PORT || 8080;

server.use(router.routes());

const run = async() => {
  console.log(`Listening on port ${port}`);

  await server.listen(port);
};

run();

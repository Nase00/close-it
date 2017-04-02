import Router from 'koa-router';

import circuitController from './circuit-controller';

const router = new Router();

router.post('/api', (ctx, next) => circuitController.handle(ctx, next));

export default router;

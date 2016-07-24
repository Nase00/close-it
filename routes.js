import Router from 'koa-router';

import circuitController from './circuit-controller';

const router = new Router();

router.get('/api/press', () => circuitController.press());

router.get('/on/open', () => { /* TODO */ });

router.get('/api/close', () => { /* TODO */ });

export default router;

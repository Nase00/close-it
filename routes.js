import Router from 'koa-router';

import circuitController from './circuit-controller';

const router = new Router();

router.post('/api/press', () => circuitController.press());

router.post('/api/open', () => { /* TODO */ });

router.post('/api/close', () => { /* TODO */ });

export default router;

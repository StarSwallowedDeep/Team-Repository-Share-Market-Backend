import Router from 'koa-router';
import * as accessCtrl from './access.ctrl.js';

const access = new Router();

access.post('/', accessCtrl.logInformation);

export default access;

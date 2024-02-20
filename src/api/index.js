import Router from "koa-router";
import posts from "./posts";
import auth from "./auth";
import access from "./access"

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/access', access.routes());

export default api;

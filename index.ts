import Koa from "koa";
import bodyParser from "koa-bodyparser";
import routes from "./src/lib/routes";

const app = new Koa();
const router = routes();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);

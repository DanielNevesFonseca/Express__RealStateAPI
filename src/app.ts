import "reflect-metadata";
import "express-async-errors";
// importar recursos do swagger
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middlewares";
import { routes } from "./routes/index.router";

const app = express();

app.use(express.json());

//
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use("/", routes);

app.use(errorHandler);

export default app;

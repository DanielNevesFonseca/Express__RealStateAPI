import { Router } from "express";
import { usersRouter } from "./users.router";
import { sessionRouter } from "./session.router";
import { categoriesRouter } from "./categories.router";
import { realEstatesRouter } from "./realEstates.router";
import { schedulesRouter } from "./schedules.router";

export const routes: Router = Router();

routes.use("/users", usersRouter);
routes.use("/login", sessionRouter);
routes.use("/categories", categoriesRouter);
routes.use("/realEstate", realEstatesRouter);
routes.use("/schedules", schedulesRouter);

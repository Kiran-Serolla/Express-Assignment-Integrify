import Express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/user";

const app = Express();
app.use(Express.json());
dotenv.config();

// routes here
app.use("/users", userRouter);

app.listen(3300, () => console.log("running"));

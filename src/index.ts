import express from "express";
import envConfig from "./config/env";
import UserRouter from "./route/user.route";

const app : express.Application = express();
const host = envConfig.host;
const port = envConfig.port;

app.use(express.json());
app.use("/users", UserRouter);

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});
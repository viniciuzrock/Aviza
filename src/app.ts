import express from "express"
import config from "config"
import ProductRoutes from "./routes/ProductRoutes"
import UserRoutes from "./routes/UserRoutes"
import path from "path"
import Logger from "../config/logger"
import morganMiddleware from "./middlewares/morgan"
import configDefault from "../config/default"

const cors = require("cors")
// const port = config.get<number>("port")
const app = express()

app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(express.json())
app.use(morganMiddleware)
app.use("/api/products", ProductRoutes)
app.use("/api/users", UserRoutes)
app.use(express.static(path.join(__dirname, 'public')))

const environment = process.env.NODE_ENV || 'development';
const currentConfig = environment === 'production' ? require('../config/production').default : configDefault;
const port = currentConfig.port;

app.listen(port, async () => Logger.info(`Server online in port: ${port}`))
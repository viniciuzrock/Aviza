import express from "express"
import config from "config"
import ProductRoutes from "./routes/ProductRoutes"
import UserRoutes from "./routes/UserRoutes"
import path from "path"
const cors = require("cors")
const port = config.get<number>("port")
const app = express()

//use cors
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())
app.use("/api/products", ProductRoutes)
app.use("/api/users", UserRoutes)
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, async () => console.log(`Server online in port: ${port}`))
import express from "express"
import config from "config"
import ProductRoutes from "./routes/ProductRoutes"
import UserRoutes from "./routes/UserRoutes"

const port = config.get<number>("port")
const app = express()

app.use(express.json())
app.use("/api/products", ProductRoutes)
app.use("/api/users", UserRoutes)

app.listen(port, async () => console.log(`Server online in port: ${port}`))
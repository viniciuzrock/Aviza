import express from "express"
import config from "config"
import router from "./routes/router"

const port = config.get<number>("port")
const app = express()

app.use(express.json())
app.use("/api", router)

app.listen(port, async () => console.log(`Server online in port: [${port}]`))
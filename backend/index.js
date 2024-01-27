import express from "express";
import 'dotenv/config'
import connect from "./connectors/dbConnectors.js";
import articleRoutes from "./routes/articleRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

const app = express();
const port = process.env.PORT || 3002;

connect()

app.use(express.json())
app.use('/article', articleRoutes)
app.use('/cart', cartRoutes)
app.use('/order', orderRoutes)

app.use(express.static("./backend/public"))

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})

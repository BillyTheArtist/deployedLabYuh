let express = require("express")
let cors = require("cors")
require("dotenv").config()


let app = express()

app.use(express.json())
app.use(cors())

let {home} = require("./controllers/pageCtrl.js")

app.get("/", home)

let { PORT } = process.env

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
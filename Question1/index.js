import express from "express"
import register from "./apiRoute.js"
const app = express()
const port = 3000


app.use('/20.244.56.144',register)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})






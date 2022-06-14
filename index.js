import express from 'express'
import mongoose from 'mongoose'
import Post from "./mongoapp/Post.js"
import router from "./router.js"


const PORT = 5000
//const DB_URL = "mongodb://localhost:27017/project"
const DB_URL = "mongodb+srv://lorex59:25092003Danil@project.lfdeyhb.mongodb.net/project?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use("/api", router)

async function startApp(uri, callback){
    try {
        await mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log("Server start on port" + PORT))
    }catch (e) {
        console.log(e)
    }
}

startApp()


import express from "express";
import path from "path";
const PORT = process.env.PORT || 8000
import {fileURLToPath} from "url";
import posts from  "./routes/posts.js";
import { logger } from "./middlewares/loggers.js";
import { postNotFound } from "./middlewares/errors.js"

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// Static Files like html & css & js
app.use(express.static(path.join(__dirname, 'pages')))

// For receiving body data like json or form data
app.use(express.json()) // JSON data
app.use(express.urlencoded({extended: false})) // FORM data

// Logger is a global middleware it's works on all routes
app.use(logger)


app.use("/api/posts/", posts)
app.use(postNotFound) // Only work just under the post routes

// app.use((req, res, next) => {
//     const error = new Error('this url does not exists')
//     error.status = 404
//     res.status(error.status).json({error: error.message})
// }) // Work globally







app.listen(PORT, () => console.log('Server is running on port 80'))
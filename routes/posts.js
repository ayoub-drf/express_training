import express from "express";
const router = express.Router();
import { getPosts, getPost,
         createPost, updatePost,
         deletePost,
       } from "../controllers/postControllers.js";


const logger = (req, res, next) => {
    // console.log(`${req.method} ${req.protocol}:${req.get('host')}${req.originalUrl}`)
    next()
}
 
const isSafeProtocol = (req, res, next) => {
    // if (req.protocol === 'http') {
    //     return res.json({'Invalid Protocol': "http method not allowed"})
    // }
    next()
}

// (Route Middleware) Logger middleware work only on the route
router.get('/', isSafeProtocol, getPosts);

router.get('/:id/', getPost);

router.post('/', createPost);

router.put("/:id/", updatePost);

router.delete("/:id/", deletePost);

export default router;
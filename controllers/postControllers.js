let posts = [
    {id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
    {id: 3, title: "Post 3"},
]

// Method: GET | Route: api/posts/ 
export const getPosts = (req, res, next) => {
    // Get ALL Posts
    const limit = req.query.limit
    if (limit) {
        if (isNaN(limit)) {
            res.status(400).json({'limit': 'is not a number'})
        } else {
            res.status(200).json(posts.slice(0, parseInt(limit)))
        }
    } else {
        res.json(posts)
    }
};

// Method: GET | Route: api/posts/:id/
export const getPost = (req, res, next) => {
    // Get Single Post
    const i = parseInt(req.params.id)
    const isPostExists = posts.find(({id}) => id === i)
    if (isPostExists) {
        const post = posts.filter(({id}) => id === i)
        res.status(200).json(post)
    }
    const error = new Error(`Post with this id ${i} does not exists`)
    error.status = 404
    next(error)
};

// Method: POST | Route: api/posts/
export const createPost = (req, res, next) => {
    // Create New Post
    const id = req.body.id;
    const title = req.body.title;
    if (!id && !title) {
        return res.status(400).json({title: 'this field is required', id: 'this field is required'})
    }
    if (!id) {
        return res.status(400).json({id: 'this field is required'})
    }
    if (!title) {
        return res.status(400).json({title: 'this field is required'})
    }
    posts.push({id: id, title: title})
    res.status(201).json({id: id, title: title})
};

// Method: PUT | Route: api/posts/:id/
export const updatePost = (req, res, next) => {
    // Update A POst
    const title = req.body.title;
    const id = req.params.id;

    if (!title) {
        return res.status(400).json({title: 'this field is required'})
    }
    const post = posts.map((post) => post.id === parseInt(id) ? post.title = title : false);

    res.json(posts)
};

// Method: DELETE | Route: api/posts/:id/
export const deletePost = (req, res, next) => {
    // Delete A Post
    const id = req.params.id;

    posts = posts.filter((post) => post.id !== parseInt(id));

    res.status(204).json(posts)
};
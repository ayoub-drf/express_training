import colors from "colors"

const isSafeProtocol = (req, res, next) => {
    // if (req.protocol === 'http') {
    //     return res.json({'Invalid Protocol': "http method not allowed"})
    // }
    next()
}

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}:${req.get('host')}${req.originalUrl}`['red'])
    next()
}

export {
    isSafeProtocol,
    logger,
}
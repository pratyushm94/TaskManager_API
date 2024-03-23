// error handler in express have 4 argument, then set it under all other routes
const errorHandlerMiddleware = (err, req, res, next) => {
 return  res.status(500).json({msg: err})
}

module.exports = errorHandlerMiddleware;
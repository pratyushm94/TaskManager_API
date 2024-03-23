// it will be a middleware function which wraps a  function
// use case? - reduce redundancy by writing common operation for all the controllers
//so it eliminates the try catch block for each controller function
const asyncWrapper = function (fn) { //fn is the controller 
    return async(req, res, next) => {
        try {
           await fn(req,res,next) // why await here?-as the controller function will return a promise   
        } catch (error) {
        next(error)    //handle this error in a custom made error handler(if not then built in err handler handles)
        }
}
}

module.exports = asyncWrapper;



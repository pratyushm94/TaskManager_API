const db = require("mongoose");

//let connectString = "mongodb+srv://pratyush:1234@cluster0.ybrzo.mongodb.net/TaskManagerApi?retryWrites=true&w=majority" ;

const connectDB = function (url) {
   return db.connect(url, {  // why a return  here? 
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})
}


module.exports = connectDB;
// simply import the module, if a method is executed here then it will be invoked automatically there
// In this case, if you call connectDB(url) from elsewhere in your code, you won't be able to capture the result of db.connect() or handle any potential errors that may occur during the connection process. The function will execute the database connection but won't provide any feedback about its success or failure.
// Typically, when working with asynchronous operations like database connections, it's important to handle the results or errors properly. Therefore, using a return statement allows you to capture the connection result or error in the calling code and handle it appropriately.
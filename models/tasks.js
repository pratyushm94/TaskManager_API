const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: { // validation, create an object for set of values
        type: String,
        required: [true, 'must provide name'], // a custom error message 
        trim: true,
        maxlength: [20,'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    },

}
);

module.exports = mongoose.model('task', TaskSchema); // dont use new-it will create a new instance of 
//of this model everytime its imported in a module--consumes more memory. 


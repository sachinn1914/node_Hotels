const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({


    name : {    
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    work :{                                                                                 
        type: String,
        required: true,
        enum :['chef', 'waiter', 'manager']
    },
    mobile : {
        type : String,
        required: true
        
    },
    email : {
        type : String,
        requirede: true
       
    },
    address : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    }
})

// create person model //
const Person = mongoose.model('Person', personSchema);
module.exports = Person;



// // import mongoose
// const mongoose=require('mongoose');

// //connection string
// mongoose.connect('mongodb://localhost:27017/contactApp')

// //create modal
// const user=mongoose.model('user',{
//     id:String,
//     name:String,
//     address:String,
//     phone:String,
//     email:String,
//     username:String,
//     password:String,    
//     photo:String
// })


// module.exports={
//     user
// }
//node+mongodb connection
//import mongoose
const mongoose=require('mongoose');

//connection string
mongoose.connect('mongodb://localhost:27017/contactApp')

//create a model
const contact=mongoose.model('contact',{
    id:String,
    name:String,
    address:String,
    phone:String,
    email:String,
    username:String,
    password:String
})
module.exports={
    contact
}
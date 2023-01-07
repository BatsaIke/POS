


 const Product = require('./models/productsModel.js')
 const jsonProducts= require('./data.json')
const  mongoose  = require('mongoose')

 const start = async ()=>{
    try {
       await mongoose.connect(
         "mongodb+srv://Batsa:12345@cluster0.2a1at.mongodb.net/POS?retryWrites=true&w=majority"
       ); 
       await Product.deleteMany();
       await Product.create(jsonProducts)
       console.log("going");
       
    } catch (error) {
        console.log(error);
    }
 }

 start()
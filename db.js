const  mongoose  = require("mongoose")

var mongoURL ='mongodb+srv://akhil:akp7594959033@cluster0.7takx.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true})

var db =mongoose.connection

db.on('connected', ()=> {
    console.log('Mongo DB connection succesful');
})
db.on('error',()=>{
    console.log('mongo db connection failed');
})
module.exports= mongoose
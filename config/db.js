const mongoose= require("mongoose")

const db= ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("mongo dbye bağlanıldı")
    }).catch((err)=>{
        //throw new Error("hata oluştu")
        console.log(err)
    })
}

module.exports= db
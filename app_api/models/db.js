var mongoose=require("mongoose");
var dbURI="mongodb+srv://alperenakkal06:tqHMKHtf4PQYsHrH@mekanbul.eiaeh9v.mongodb.net/mekanbul";


mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("Hata oluştu");
});
mongoose.connection.on("disconnet",function(){
    console.log("Bağlantı kesildi");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı Kapatıldı");
    process.exit(0);
});
require("./venue");
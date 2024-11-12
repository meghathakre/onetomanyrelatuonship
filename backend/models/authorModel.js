const mongoose= require("mongoose");
const authorSchema= new mongoose.Schema({
     author_name:String,
     author_books:[{type:mongoose.Schema.Types.ObjectId, ref:'book'}]
})

module.exports = mongoose.model("author", authorSchema);
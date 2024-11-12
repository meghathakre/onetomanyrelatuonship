
const mongoose= require("mongoose");

const bookSchema=new mongoose.Schema({
       book_name:String,
       book_price:Number,
       author_id:{type:mongoose.Schema.Types.ObjectId, ref:'author'}
})

module.exports= mongoose.model("book", bookSchema);
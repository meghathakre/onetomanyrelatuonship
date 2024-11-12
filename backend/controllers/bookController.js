const Author= require("../models/authorModel");
const Book = require("../models/bookModel");
const bookSave=async(req, res)=>{
  const {authorname, bookname, bookprice}= req.body;
  const author =await Author.create({
    author_name:authorname
  })
  const book= await Book.create({
       book_name:bookname,
       book_price:bookprice,
       author_id:author._id
  })
  await Author.findByIdAndUpdate(author._id,{$push:{author_books:book._id}})
 res.send(author);   
}

const bookDisplay=async(req, res)=>{
       const authorData= await Author.find().populate('author_books');
       res.send(authorData);
}

module.exports={
    bookSave,
    bookDisplay
}
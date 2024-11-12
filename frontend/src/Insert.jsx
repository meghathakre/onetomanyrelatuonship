import { useState } from "react";
import axios from "axios";
const Insert=()=>{
  const [input, setInput] = useState({});

  const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>{
    let api="http://localhost:8080/books/booksave";
    axios.post(api, input).then((res)=>{
        console.log(res);
        alert("Data save!!!");
    })
  }

    return(
        <>
          <h1> Insert Page</h1>
          Enter Authername : <input type="text" name="authorname"
           value={input.authorname} onChange={handleInput} />
          <br/>
          Enter Book Name : <input type="text"  name="bookname"
           value={input.bookname} onChange={handleInput} />
          <br/>
          Enter Price : <input type="text"  name="bookprice"
           value={input.bookprice} onChange={handleInput} />
           <br/>
          <button onClick={handleSubmit}> Click </button>
        </>
    )
}
export default Insert;

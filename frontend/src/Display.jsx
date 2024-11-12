import { useState, useEffect } from "react";
import axios from "axios";

const Display=()=>{
 const [mydata, setMydata]= useState([]);

 const loadData=()=>{
  let api="http://localhost:8080/books/booksdisplay";
  axios.get(api).then((res)=>{
    console.log(res.data);
    setMydata(res.data);
  })
 }




useEffect(()=>{
  loadData();
}, [])

  return(
        <>
          <h1> Display Page</h1>
          <table>
            <tr> 
              <th> Firstname</th>
              <th> Secondname</th>
              <th> User ID</th>
              <th> Email</th>

            </tr>
           
          </table>
        </>
    )
}

export default Display;
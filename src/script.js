const { rejections, error } = require("winston")

function connectToDb(number,connect){
  number===1?connect():null
}


function getBook(bookId){
  return new Promise((resolve,reject)=>{
    if(bookId===1)
      resolve({name:"Ali"})
    else
      reject({error:"invalid user"})
  })
}
module.exports={connectToDb,getBook}
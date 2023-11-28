
const fs = require("fs")

// fs.writeFile("message1.txt","hello this is node js",(err)=>{
//     if(err) throw err;
//     console.log("file is created")
// })

fs.readFile("./message1.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
const fs=require("fs");
fs.writeFileSync("./text.txt","This is sync file content");

const file=fs.readFileSync("text.txt","utf-8");

const asyncfile=fs.readFile("text.txt","utf-8",(err , data)=>{
    if (err){
        console.log("error in file handling",err)
    }
    else{
        console.log("file reading successfull",data)
    }
})
console.log(asyncfile);
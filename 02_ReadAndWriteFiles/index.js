const fs=require("fs");

// to run this js file, type 'node fileName' in the terminal

//// //// //// //// //// //// //// //// //// //// //// 
// instead of output a <Buffer ...>, methods to print a string

// METHOD 1:
// data.toString()

// fs.readFile('./files/starter.txt',(err,data)=>{
//     if (err) throw err;
//     console.log(data.toString());
// })

// METHOD 2:
// parameter: 'utf8'
// fs.readFile('./files/starter.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })

//// //// //// //// //// //// //// //// //// //// //// 
const path=require('path');

// './files/starter.txt' ----->  
// __dirname is a value that's always available to us in node.
fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})

console.log('Hello...')

// writeFile can create a file.
fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you ^.^',(err)=>{
    if (err) throw err;
    console.log("Write complete");
})

// appendFile can create a file
fs.appendFile(path.join(__dirname,'files','test.txt'),'\n^.^',(err)=>{
    if (err) throw err;
    console.log("Append complete");
})

fs.rename(path.join(__dirname,"files",'reply.txt'),path.join(__dirname,'files','newReply.txt'),err=>{
    if (err) throw err;
    console.log("Rename complete");
})

// exit on uncaught errors
process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
const fs=require('fs');
const path=require('path');

// we can use 'fs.existsSync(..)' to check if a directory is exist
if(!fs.existsSync(path.join(__dirname,'new'))){
    fs.mkdir(path.join(__dirname,'new'),err=>{
        if (err) throw err;
        console.log("Directory created")
    })
}

if(fs.existsSync(path.join(__dirname,'new'))){
    fs.rmdir(path.join(__dirname,'new'),err=>{
        if (err) throw err;
        console.log("Directory removed")
    })
}
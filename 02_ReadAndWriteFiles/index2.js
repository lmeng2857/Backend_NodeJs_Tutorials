const fsPromise=require("fs").promises;
const path=require('path');

const fileOps=async ()=>{
    try {
        const data=await fsPromise.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        // unlink will delete the file!
        await fsPromise.unlink(path.join(__dirname,'files','starter.txt'));
        await fsPromise.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
        await fsPromise.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\nGuess who i am!');
        await fsPromise.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseRename.txt'));
        const newData=await fsPromise.readFile(path.join(__dirname,'files','promiseRename.txt'),'utf8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();
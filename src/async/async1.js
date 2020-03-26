const fs = require('fs');
// 简单封装

const readFile = (fileName) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) reject(err);
            resolve(data)
        })
    })
}

// async

async function fn(){
    try{
        let f1 =   await readFile('data/a.txt');
        let f2=   await readFile('data/b.txt');
    }catch(err){}
    console.log(f1.toString());
    console.log(f2.toString());
}
fn();
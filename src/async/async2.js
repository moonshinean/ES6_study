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
    let [a,b] = Promise.all([readFile('data/a.txt'),readFile('data/b.txt')]);
    console.log(a.toString());
    console.log(b.toString());
}
fn();
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

// generator

function * gen(){
    yield readFile('data/a.txt')
    yield readFile('data/b.txt')
}
let g1 = gen();
g1.next().value.then(res => {
    console.log(res.toString());
    return g1.next().value;
}).then(res1 => {
    console.log(res1.toString());
})
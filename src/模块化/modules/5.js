import {a, b} from './3.js'

const show = () => {
    console.log('执行了show');
}
const sum = () => {
    console.log(a + b);
    return a+b
}
class Persion {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    showName(){
        console.log(`我的名字是${this.name}`)
    }
}
export {
    a,
    b,
    show,
    sum
}
export default {
    Persion
}


# ES6 基础语法学习

## 关于定义
之前： var a = 12;
作用域： 全局 （函数作用域）
> 注意 如果在函数里面，有局部变量声明，则先调用局部里的变量,只针对的函数有作用域一说，其他的都是全局
> 用var 定义一个全局变量，属于window。let ，const 不同

|变量|描述|
|:--:|:--:|
| let| 相当于之前的var
|const| 常量, 定义好了不能改变

>  块级作用域   
```
let特点：
   1、没有预解析，不存在变量的提升
   2、在代码块内，只要let定义变量，在之前使用都是报错的，必须先定义 ，后使用
   3、同一个作用域里面，不能重复定义
   4、for循环，for循环里面的()小括号是父级作用域，{}花括号里面又是一个作用域
```
```
conet特点：
   1、跟let一样的，但是定义变量不能修改
   2、const 定义完变量， 必须有值，不能后赋值，不能修改
   3、const 定义一个对象是可以修改数据的(这是对象的特性，对象本身就是引用的)
   const arr = ['apple', 'banana'],
   arr.push('pair')
   这中是可以修改的。

```
### IIFE 立即执行匿名函数
```
(function(){
   // TODO
   console.log(123)
})()
```
### 建议 
> 以后就用 let 不要在使用 var, 确定不在修改的东西就用const

## 解构赋值
> 非常有用，特别是在做数据交互  ajax   
```
 let [a,b,c] = [12,5,6]
```
> 注意： 左右两边，结构格式要保持一致

```
let {name,age,job:a} = {
            'name': 'jk',
            'age': 18,
            'job': '码畜'
        };

解构的时候可以给默认值
let [a,b,c='默认值'] = [12,12,null]
```
## 字符串模板
> 用于字符串拼接   
> `${}` 这就是字符串模板
```
列如: 
  let name = 'Strive';
        let age= 18;
        let str = `这个人叫${name}, 年龄是${age}岁`;
```
字符串查找
```
str.indexof(要找的东西) 返回索引值()
str.inclouds(要找的东西) 返回值 true/false

字符串是否以什么开头
   str.startWith(检测的东西)
字符串是否以谁结尾
   str.endsWith()
重复字符串
   str.repeat(需要重复的次数)
填充字符串
   str.padStart(整个字符串的长度，填充的东西)
   str.padEnd(整个字符串的长度，填充的东西)
```
## 函数
### 1、 函数的默认参数
```
   function show(a ='123', b ='mmr') {
           console.log(a, b);
        }
```
### 2、函数的形参默认已经是定义了的，不能用let 和 const 来重复定义

```
     function show(a = 18) {
            let a = 101; // 此处因为重复定义，会报错
           console.log(a, b);
        }
        show(12)
```
### 3、 扩展运算符、Rest运算符
> ... (属性扩散)
```
     let arr = ['apple', 'banana', 'orange']
     console.log(arr);
     console.log(...arr);
```
> 箭头函数
```
 模板
      () => {语句}
```
### 4、注意
>1、  this 问题，定义函数所在的对象，不是运行时所在的对象    
 
 列如：
 ```
 const json = {
     id: 1
     show: function (){
        setTimeout(function(){
           alert(this.id)
        },2000)
     }
 }
 json.show();
 此处的this.id会找不到,this指的是window。

 解决方法:
  const json = {
     id: 1
     show: function (){
        setTimeout(() =>{
           alert(this.id)
        },2000)
     }
 }
 json.show();
 将其换成箭头函数即可，此时，此处的this.id指的是当前对象的id，this指的是当前对象

 ```
>2、 箭头函数里面没有arguments, 用三个点 '...'


>3、 箭头函数不能作为构造函数

## 数组
### 循环
> 最初的循环

```
1、for 循环   
2、while 循环
```
> ES5新增的一些东西
```
1、arr.forEach()  // 用来代替普通的for循环
      arr.forEach(function(val, index, arr){
         <!-- var 值当前数组中的值 ， index是索引，arr 是循环的数组-->
         console.log(val, index, arr)
      })
2、arr.map() // 非常有用，做数据交互 "映射"
   正常情况下，需要配合return，返回一个新的数组
   若是没有return，相当于forEach
   注意： 平时只要用 map , 一定要有return 
   重新整理数据结构。
3、arr.filter() // 过滤 过滤一些元素，如果回调函数返回true， 就留下来。
4、arr.some() //类似查找,数组里面某个元素符合条件，返回true；
5、arr.every() //类似查找,数组里面所有的元素符合条件，才返回true；


以上的循环其实都可以接受两个参数：
    arr.forEach()/map(循环的回调函数, this指向谁)
---------------------------------------------------------
6、arr.reduce()
      求数组的和、阶乘
7、arr.reduceRight() // 从右往左
```
> ES2017 新增一个幂的运算符（**）
```
 列如 求 2的3次方 
    2 ** 3
``` 
> ES6 新增循环
```
for...of 
    数组新增了 两个方法
    arr.keys()  数组下标
    arr.entries() 数组某一项
列如：
1、没有索引的
     for(let item of arr){
            console.log(item);
        }
2、带索引的
  for(let [key, value] of arr.entries()){
            console.log(key, value);
        }
```
### 数组的方法
> Array.form 方法
 
 作用： 把类数组(获取一组元素、arguments...)对象转成数组   
 类数组： 只要具备 length这个东西， 就靠谱

 > Arrar.of()方法

 作用： 将一组数据转为数组
 ```
 let arr = Array.of('apple', 'banana', 'orange');
        console.log(arr);
 ```

 > arr.find()方法

 作用：查找，找出第一个符合条件的数组成员，如果没有找到，返回undefined

 >arr.findIndex()方法
  作用：查找，找出第一个符合条件的数组成员的位置，如果没有找到，返回-1

> arr.file() 方法
  作用： arr.fill(填充的东西，开始位置，结束位置) ；

在 ES2016里面新增：
```
   arr.includes()
   str.includes()
```

## 对象
### 对象简洁语法  
```
   let json = {
            name,  // 等价于 name: name
            age,  // 等价于 age: age,
            show(){  // 注意 一定不要用 箭头函数此处
                return this.name
            },
            showAge(){
                return this.age
            }
        }
```
> Object.is() 用来比较两个值是否相等
```
 object.is('a', 'a')

  比较两个东西是否相等:
       ==
       ===
       Object.is(NaN, NaN)
       Object.is(+0, -0)
```
>Object.assign(): 用来合并对象
```
let 新对象= object.assign(目标对象，source1，source2...)

function ajax(options){  // 用户传
       let default = {
          type：'get',
          header: '',
          data: {}
          ....
       }

       let obj = Object.assign({}, defaults, options)

}
```
用途：  
1. 复制一个对象(或数组)
2. 合并参数

> ES2017引入:
```
object.keys()
object.entries()
object.values()

       let {keys, values, entries} = Object
        let json = {
            a: 1,
            b: 2,
            c: 3
        }
        for(let key of keys(json)){
            console.log(key);
        }
        for(let value of values(json)){
            console.log(value);
        }
        for(let item of entries(json)){
            console.log(item);
        }
```
## Promise: 
作用：解决异步回调的问题(解决回调地狱的问题)

传统方式， 大部分是用回调数函数，时间。
```
语法：
    let promise =  new Promise(function(resolve, rejext){
            // resolve, 成功回调
            // reject，失败调用
        })

         promise.then(res => {
            console.log(res);
        }, err => {
            console.log(err);
        })
        promise.catch(res => {})
```
 - Promise.resolve('aa'): 将现有的东西转成一个promise对象，resolve状态，成功状态
 ```
  等价于 
      new Promise(resolve() => {
         resolve('aa')
      })
 ```
 - Promise.reject('aaa'): 将现有的东西，转成一个promise对象，reject状态，失败状态
  ```
  等价于 
      new Promise(reject() => {
         reject('aa')
      })
 ```
 - Promise.all([promise1, p2,p3]):把promise打包，扔到一个数组里面，打包完还是一个promise对象, 必须确保，所有的promise 对象，都是resolve状态，都是成功的状态

 -Promisr.rece([promise1, p2,p3]):把promise打包，扔到一个数组里面，打包完还是一个promise对象,  只要有一个成功就返回。
 
 ## 模块化
 js 不支持模块化
     ruby  require
     python import

在ES6之前，社区制定一套模块规范：
     commonjs   主要是服务端 nodeJs  require('http)
     AMD       requireJs,curlJs   
     CMD       seaJs

ES出来，统一服务端和客户端模块规范：
     import {xxx} ddd

> 模块化：   
    
    注意： 需要放到服务器环境
1. 如何定义模块？
   export 东西
   export const a =12;
   export {a as aa, b as bbb, c as ccc}
2. 如何使用模块
   import 东西
   import {a as aaa, b as bbb, c as cc} from './modules/1.js'
    import * as ModTwo from './modules/3.js'
> 使用模块
```
注意： 在不使用babel 的情况下使用，用以下方法
<script type="module"></script>
```
> import 

- import  可以是相对路径，也可以是绝对路径。
- import  模块只会导入一次，无论你引入多少次
- import  './modules/1.js' 如果这么用，相当于引入一个文件
- import 有提升效果，import会自动提升到顶部，首先执行。
- 导出去的模块内容，如果里面有定时器更改，外面的也会改动，不像commonjs规范缓存

> 注意：
```
export default const a = 12;
此时导入的时候  import 不需要加{}，
import a form ''

如果导出的时候没有default  那么导入的时候需要对应加上 {}
列如： export const a =12;
import {a} from ''
```
1、import() 类似于node里面吗的require， 可以动态引入，默认import语法不能写到if 之类的判断语句中。返回对象是一个promise对象，里面可以用then方法
```
    import('./modules/1.js').then(res => {
            console.log(res);
        })
```
优点:
  1. 按需加载
  2. 可以写入if中
  3. 路径也可以动态

  ## 类（class）

  > 模拟函数：
  ```
    function Persion(name, age){
            this.name = name;
            this.age = age;
        }
        Object.assign(Persion.prototype, {
            showName(){
                return `名字是${this.name}`
            },
            showAge(){
                return `年龄是${this.age}`
            }
        })
        let p1 = new Persion('Strive', 12);
        console.log(p1.showName());
        console.log(p1.showAge());
  ```
  > ES5 之前
  ```
   function Persion(){
      this.name = 'aaa'
   }
   Persion.prototype.showName = function(){
      return `名字为：${this.name}`
   }
  ```
  > ES6中类的变形

  ```
  第一种写法：
   class Persion{
            constructor(name,age){// 构造方法函数，调用new，自动执行
            //    console.log(`构造函数执行了, ${name},${age}`);
                this.name = name;
                this.age = age;
            }
            showName(){
                return `名字为：${this.name}`
            }
            showAge(){
                return `年龄为：${this.age}`
            }
        }
  ```
  ```
  第二种写法：（此种不推荐）
       const Persion = class {
            constructor(name,age){// 构造方法函数，调用new，自动执行
            //    console.log(`构造函数执行了, ${name},${age}`);
                this.name = name;
                this.age = age;
            }
            showName(){
                return `名字为：${this.name}`
            }
            showAge(){
                return `年龄为：${this.age}`
            }
        }
  ```
  > class定义中的函数
```
函数表达式命名法
  let a = 'Strive'
   const Persion = class {
      constructor(name,age){// 构造方法函数，调用new，自动执行
      //    console.log(`构造函数执行了, ${name},${age}`);
            this.name = name;
            this.age = age;
      }
      //  此处的函数是表达式的形式
      [a](){
         return `随便啦`
      }
   }
        //  调用表达式函数方式如下
     console.log(p1.Strive());
     console.log(p1[aaa]())
```
注意：
- ES6里面class没有提升功能，在ES5，用函数模拟可以，模拟函数是提升的（class必须先定义后使用。）
- ES6里面的this比之前轻松多了

> 矫正this
  1. fn.call(this指向谁，args1,args2...)
  2. fn.apply(this指向谁, [args1,args2...])
  3. fn.bind()
> class 函数的 getter 和 setter
```
    const Persion = class {
            constructor(){// 构造方法函数，调用new，自动执行
            }
            get aaa(){
                return 'aaa的属性';
            }
            set aaa(val){
                console.log(`设置aaa的属性，值为：${val}`);
            }
        }
        let p1 = new Persion() 
        p1.aaa = '123';
        console.log(p1.aaa);
```
静态方法: 就是类身上的方法
```
 static aaa(){}
 父类.aaa();
```

> 继承：
```
之前的继承：
        // 父类
        function Persion(name){
            this.name = name;
        }
        Persion.prototype.showName = function(){
            return (`名字为：${this.name}`);
        }
        // 子类
        function Student(name, skill){
            Persion.call(this,name); // 继承属性
            this.skill = skill;
        }
        Student.prototype = new Persion(); // 继承方法
        // 调用
        let Stu1 = new Student('小明', '逃学')
        console.log(Stu1.showName());
```  
```
现在的继承： extends
          // 父类
        class Persion{
            constructor(name){
                this.name = name;
            }
            showName(){
                return `名字为：${this.name}`
            }
        }
        // 子类
        class Student extends Persion{

        }
        // 调用
        let Stu1 = new Student('小明', '逃学')
        console.log(Stu1.showName());
```
## 数字类型
 number、string、boolean、Object、undefined、function

 用typeof检测出来的数据类型:
      symbol
 
 > ES6 新增一个 symbol数据类型，使用情况一般。
```
定义：
    let syml = Symbol('aaa')
```
注意：  
   1. Symbol 不能 new
   2. Symbol() 返回的是一个唯一值，做一个key，定义一些私有的东西
   3. symbol是一个单独的数据类型，就叫 symbol，基本数据类型
   4. 如果symbol作为key，用for in 循环，出不来

## generator 函数(生成器)
作用： 解决异步，深度嵌套问题，async

语法：
```
  function * show(){

  }
```
定义：
```
   function * gen(){
            yield 'welcome';
            yield 'to';
            return '牧马人'
        }
```
>调用
```
let g1 = gen();
g1.next();// {value: "welcome", done: false}
g1.next();// {value: "to", done: false}
g1.next();// {value: "牧马人", done: true}
```
for..of 可以自动遍历generator  
注意：return 的东西，它不会遍历。
generator 不仅可以配合for..of   
> 还可以：   
1、使用解构赋值
```
 function * gen(){
            yield 'welcome';
            yield 'to';
            return '牧马人'
        }
        let [a,b,c] = gen()//结构出来的是yield的值
        console.log(a,b,c);
```
2、扩展运算符
```
  function * gen(){
            yield 'welcome';
            yield 'to';
            yield 'china';
            return '牧马人'
        }
        console.log(...gen());
```
3、 Array.from
```
    function * gen(){
            yield 'welcome';
            yield 'to';
            yield 'china';
            return '牧马人'
        }
        console.log(Array.from(gen()));
```

异步: 不连续，上一个操作没有执行完，下一个操作照样开始
同步: 连续执行，上一个操作没有执行完，下一个没法开始

关于异步，解决方案：
  1. 回调函数，
  2. 事件监听
  3. 发布/订阅
  4. Promise


### async
```
 async function fn(){  //表示异步，这个函数里面有异步任务
 let result = await xxx // 表示后面结果需要等待

 } 
```

> async 特点:

    1. await 只能放到async函数中
    2.相比generator语义化更强
    3.await后面可以是primose对象，也可以是数字，字符串、布尔值
    4. async函数返回的是一个promise对象
    5. 只要await语句后面Promise状态变成reject,那么整个async函数就会中断执行

如何解决async函数中抛出错误，影响后续代码：
1. try..catch
```
try{

}catch(e){

}
```
2.promise本身catch

## 数据结构
> set 数据结构   

类似数组，但是里面不能有重复值   
1、用法
```
let setArr = new Set(['a','b']);
setArr.add('a'); 往setArr里面添加一项
setArr.delete('b'); 删除一项
setArr.size 个数
setArr.clear() 清空
```
2、循环
```
let setArr = new Set(['a','b','c','d'])// set里面不能有重复的值
//  默认是values()
    for(let item of setArr){
        console.log(item);
    }

    for(let item of setArr.keys()){
            console.log(item);
        }
    for(let item1 of setArr.values()){
        console.log(item1);
    }
    for(let [k,val] of setArr.entries()){
        console.log(k,val);
    }
```
数组去重：
```
     let arr = [1,2,3,4,5,6,7,5,4,3,2,1,3,4,4,3]
        // 方法一
        let newArr = new Set(arr)
        console.log(Array.from(newArr));
          // 方法二
        let newArr1 = [...new Set(arr)]
        console.log(newArr1);
```
set数据结构变成数组：
 [...set]


 ```
 new Set([])   存储数组,这种写法对，
 new WeakSet({})   存储json，这种写法不靠谱

 WeakSet没有size,也没有clear()，没有forEach,
 有 add，delete ，has等方法。

 注意： 1、经过确认，初始值往里面添加json都是不行的。最好用add方法添加。

总结:  以后只用Set(new Set())
 ```
> map     

类似与json，但是json的键(key) 只能是字符串，map的key可以是任何类型

使用：
```
   let map  = new Map();
   map.set(key, value) // 设置一个值
   map.get(key) // 获取一个值
   map.delete(key) // 删除一项
   map.has(key)  //判断有没有
   map.clear() 清空
```
循环：
```
for(let [key,val] of map){}
for(let key of map.keys()){}
for(let value of map.values()){}
for(let [k,v] of map.entries()){}
```

> WeakMap(): key只能是对象

总结:
1. Set 李米娜是数组，不重复，没有key，没有get方法。
2. Map 对json 功能增强，key 可以是任意类型值

### 数字(数值)变化：
1、二进制(binary)：   
    let a = 10 // 十进制    
2、八进制(Octal):    
    let a = 0o666   
3、十六进制:     
      let a = #ccc
```
Number.isNaN(NaN) ->  true  // 判断是否为NaN
Number.isFinite(a) // 判断是否为数字
Number.isInteger()   //判断数字是否为整数
Number.parseInt();
Number.parseFloat();
```
> 安全整数：   
安全整数: -(2^53 - 1) 到 (2^53 -1)  // 包含 -(2^53 - 1) 和 (2^53 -1) 
```
Number.isSafeInteger(a)  // 判断是否为安全整数
Number.MAX_SAFE_INTEGER  最大安全整数
Number.MIN_SAFE_INTEGER  最小安全整数
```
> Math   
 
```
Math.abs()
Math.sin()
Math.sqrt()
Math.trunc()  // 截取，只保留整数部分
       Math.trunc(4.5) -> 4
       Math.trunc(4.25) -> 4

Math.sign()  // 判断一个数到底是正数、负数或0
       Math.sign(-5) -> -1
       Math.sign(5) -> 1
       Math.sign(0) -> 0
       Math.sign(-0) -> -0
       Math.sign('abc') -> NaN
       非整数返回NaN
Math.cbrt()  计算一个数的立方根
       Math.cbrt(27) -> 3
```

### ES2018(ES9)
1、命名捕获   
```
语法： (?<名字>)

    let str = '2018-03-23';
    let res = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

    let dateArr = str.match(res).groups;
    console.log(dateArr);
    let {year, month, day} = dateArr;
    console.log(year, month, day);
```
反向引用:   
   \1 \2 $1 $2   
2、 反向引用命名捕获：   
 语法： \k<名字>

 ```
   let reg = /^(?<strive>welcome)-\k<strive>$/
    匹配 'welcome-welcome';
-----------------------------------------------
   let reg = /^(?<strive>welcome)-\k<strive>-\1$/
   匹配  'welcome-welcome-welcome'
 ```
3、替换：   
       $<名字>
```
     let str = '2018-03-23';
     let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
        
     // 2018/03/23
     str = str.replace(reg, '$<year>/$<month>/$<day>');
     console.log(str);
-----------------------------------
     let str = '2018-03-23';
     let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
     str = str.replace(reg, (...args) => {
        let {year, month, day} = args[args.length -1];
        return `${year}/${month}/${day}`
     })
     console.log(str);
```
4、dotAll 模式    s
 之前 '.' 在正则里面表示匹配任意东西，但是不包括\n
 ```
  let reg = /^\w+.\w+$/s;
  let str = 'welcome\nwelcome';
  console.log(reg.test(str));
  如果有.不能匹配的东西，就添加s  匹配任意
 ```

5、 标签函数 
```
    function fn(args){ 
    //    console.log(args);
        return args[0].toUpperCase();
    }
    console.log(fn`welcome`);
```

## proxy 代理
  扩展(增强)对象一些功能

  比如:    
```
    vue
       vue.config.keyCodes.enter = 65
```
> proxy 作用：比如vue中的拦截 
   预警、上报、扩展功能、统计、增强对象的等等   

proxy 是设计模式的一种，代理模式

语法: 
```
new Proxy(target，handler)
let obj = new Proxy(被代理的对象， 对代理的对象做什么操作)

{
    set(){} // 设置的时候干的事情
    get(){} // 获取干的事情
    deleteProperty(){} // 删除
    has(){} // 问你有没有这个东西 ‘xxx’ in obj
    apply() // 调用函数处理
}

例子：
    let obj = {
            name: 'strive'
        }
        let newObj = new Proxy(obj, {
            get(target, property){
                // console.log(target, property);
                // TODO 
                console.log(`您访问了${property}属性`);
                return target[property]
            }
        })
        console.log( newObj.name);
```
```
实现一个，访问一个对象身上的属性，默认不存在的时候给了undefined，希望如果不存在给错误(警告)信息：
```
> set() 设置，拦截：
```
设置一个年龄范围不能超过200
```
> deleteProperty() 删除, 拦截 

> has(): 检测有没有
```
 let json = {
            a: 1,
            b: 2
        };
        let newJson = new Proxy(json, {
            deleteProperty(target, property){
                console.log(`您要删除${property}属性`);
            },
            // 判断是否存在
            has(target, property){
              console.log('判断是否存在调用has方法');
              return property in target
            }
        })
        console.log( 'a' in newJson);
        delete newJson.a;
        console.log(newJson);
```
> apply() 拦截 方法
```
function fn(){
            return '我是函数';
        }
        let newFn = new Proxy(fn, {
            apply(){
                return '函数吗'
            }
        })
        console.log(newFn());
```


> Reflect 反射(一般和apply一起用)
```
 function sum(a, b){
            return a + b;
        }
        let newSum = new Proxy(sum, {
            apply(target, context, args){
                console.log(target, context, args);
                return Reflect.apply(...arguments)
            }
        })
        console.log(newSum(2,5));
```

Reflect.apply(调用的函数，this的指向, 参数数组)

```
语言内部的方法暴露到Relect对象上，
通过过Reflect对象身上直接拿到语言内部的东西

'assign in Obj' -> Reflect.has(Object, 'assign')
delete json.a  -> Reflect.deleteProperty(json, 'a')
```
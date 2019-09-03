"use strict";
/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

3、typeScript中的函数

    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数  es6


*/
// 3.1、函数的定义
//es5定义函数的方法
/**/
//函数声明法
function run() {
    return 'run';
}
//匿名函数
var run2 = function () {
    return 'run2';
};
//ts中定义函数的方法
//函数声明法
function run3() {
    return 'run3';
}
//错误写法
// function run4():string{
//     return 123;//不能将类型“123”分配给类型“string”。
// }
//匿名函数
var fun2 = function () {
    return 123;
};
alert(fun2()); /*调用方法*/
console.log("---------ts中定义方法传参---------------");
//ts中定义方法传参
/**/
function getInfo2(name, age) {
    return name + " --- " + age;
}
alert(getInfo2('zhangsan', 20));
var getInfo3 = function (name, age) {
    return name + " --- " + age;
};
alert(getInfo3('zhangsan', 40));
//没有返回值的方法
function run4() {
    console.log('run4');
}
run4();
console.log("---------ts中定义方法可选参数---------------");
// 3.2、方法可选参数 
// es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数 
function getInfo5(name, age) {
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " ---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
alert(getInfo5('zhangsan'));
alert(getInfo5('zhangsan', 123));
//注意:可选参数必须配置到参数的最后面
//错误写法
/*
 function getInfo(name?:string,age:number):string{

          if(age){

              return `${name} --- ${age}`;
          }else{

              return `${name} ---年龄保密`;
          }
         

  }

  alert(getInfo('zhangsan'))
*/
// 3.3、默认参数 可选参数
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
function getInfo6(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " ---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
alert(getInfo6('张三'));
alert(getInfo6('张三', 30));
console.log("---------剩余参数---------------");
// 3.4、剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
alert(sum(1, 2, 3, 4));
//三点运算符 接受新参传过来的值
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum2(1, 2, 3, 4, 5, 6));
function getInfo(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
// alert(getInfo('zhangsan'));  /*正确*/
// alert(getInfo(123));  错误
// alert(getInfo('zhangsan',20));
// 3.6、箭头函数  es6  
//this指向的问题    箭头函数里面的this指向上下文
// setTimeout(function(){
//     alert('run')
// },1000)
setTimeout(function () {
    alert('run');
}, 1000);

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
4、typeScript中的类

    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符
    4.4 静态属性 静态方法
    4.5 抽象类 继承 多态

    
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1、ts中类的定义
/*
es5:

    function Person(name){

        this.name=name;

        this.run=function(){

            console.log(this.name)
        }
    }

    var p=new Person('张三');

    p.run()
*/
/**/
console.log("--------- ts中定义类：");
var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.name = n;
    }
    Person1.prototype.run = function () {
        console.log(this.name);
    };
    return Person1;
}());
var p1 = new Person1('张三');
p1.run();
/**/
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (name) {
        this.name = name;
    };
    return Person2;
}());
var p2 = new Person2('张三');
// alert(p2.getName());
// p2.setName('李四');
// alert(p2.getName());
console.log(p2);
//2、ts中实现继承  extends、 super
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person3;
}());
// var p=new Person('王五');
// alert(p.run())
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name) {
        return _super.call(this, name) || this;
    }
    return Web1;
}(Person3));
var w1 = new Web1('李四');
// alert(w.run());
console.log(w1);
//ts中继承的探讨  父类的方法和子类的方法一致
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// // var p=new Person('王五');
// // alert(p.run())
// class Web extends Person{
//     constructor(name:string){
//         super(name);  /*初始化父类的构造函数*/
//     }
//     run():string{
//         return `${this.name}在运动-子类`
//     }
//     work(){
//         alert(`${this.name}在工作`)
//     }
// }
// var w=new Web('李四');
// // alert(w.run());
// // w.work();
// alert(w.run());
// 3 类里面的修饰符  typescript里面定义属性的时候给我们提供了 三种修饰符
/*
    public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符 默认就是 公有 （public）

*/
//public :公有          在类里面、 子类  、类外面都可以访问
//   class Person{
//         public name:string;  /*公有属性*/
//         constructor(name:string){
//             this.name=name;
//         }
//         run():string{
//             return `${this.name}在运动`
//         }
//     }
//     // var p=new Person('王五');
//     // alert(p.run())
//     class Web extends Person{
//         constructor(name:string){
//             super(name);  /*初始化父类的构造函数*/
//         }
//         run():string{
//             return `${this.name}在运动-子类`
//         }
//         work(){
//             alert(`${this.name}在工作`)
//         }
//     }
//     var w=new Web('李四');
//     w.work();
//类外部访问公有属性
//   class Person{
//     public name:string;  /*公有属性*/
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var  p=new Person('哈哈哈');
// alert(p.name);
//protected：保护类型    在类里面、子类里面可以访问 ，在类外部没法访问
//   class Person{
//         protected name:string;  /*公有属性*/
//         constructor(name:string){
//             this.name=name;
//         }
//         run():string{
//             return `${this.name}在运动`
//         }
//     }
// var p=new Person('王五');
// alert(p.run())
// class Web extends Person{
//     constructor(name:string){
//         super(name);  /*初始化父类的构造函数*/
//     }                  
//     work(){
//         alert(`${this.name}在工作`)
//     }
// }
// var w=new Web('李四11');
// w.work();
// alert( w.run());
//类外外部没法访问保护类型的属性
// class Person{
//     protected name:string;  /*保护类型*/
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var  p=new Person('哈哈哈');
// alert(p.name);
// private ：私有        在类里面可以访问，子类、类外部都没法访问
// class Person{
//     private name:string;  /*私有*/
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         console.log(`${this.name}在工作`)
//     }
// }
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var p = new Person('哈哈哈');
alert(p.run());

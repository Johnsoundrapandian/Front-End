let s  = document.querySelector("h1")//lib.dom.d.ts
s.innerHTML = "hello"
let q  =  document.createElement('div')
q.id = "john"
document.getElementById("js").appendChild(q)
document.getElementById("john").innerHTML = "hiiii";
const element =document.getElementsByClassName("soundar")
console.log(element)
//for(let i = 0; i<element.length;i++)
    element[0].innerHTML ='heelellel';
const tag = document.getElementsByTagName('div')
console.log(tag)
// for(let i = 0 ; i<tag.length;i++){
//     tag[i].innerHTML = 'h1'
// }
//element.innerHTML = "hellllo"

//InnerHTML interface-la innerHTML(string) property irukku

//DOM -  Document Object Modal

/*what is paradigam
1) Imparative paradigam - c 
2) Object Oriented paradigam - java,c++
3) Function Orientd paradigam - Hashkal
*/

//Memory Allocate


//function , hoisting
/*
let result = postive(5)//argument
console.log(result)
function postive(num){//declaration
    return num>=0;
}
console.log(postive)
greet()
function greet(name){
    console.log('hi',name);
}*/


/*

//recursion - function calling itself

let rec  = factorial(5);
function factorial(num){
    if(num===1){
         return 1
    }
    else return num*factorial(num-1)
}
console.log(rec)

//function expression - oru function-a oru veriable-la store 
pannumbothu atha call pannurathu antha verible initialization
aprm tha kodukkanum.

let hs = function (num){
     return num %2 === 0
}
console.log(hs(3))

// Tredition function

// let volume = function(arr){let sum = 0
//     for(let val of arr){
//     sum+= arr}
//     return sum
// };
*/
//arroww function
/*
let sum = (...args) =>{
    let s= 0
    for(let val= 1 ; val <=args.length; val++ )
    s += val;
return s;
}
//let arr = [2,4,3,5,6]
console.log(sum(1,2,3,4,5));
*/
/*
//generators- value,done(boolean),million and infinity values 
         irrnthalum ovonna tha  tharum. var(function).next().value(done)
function* john(){
    let index = 1;
    while(true) {yield index++;}//return replace yeild
}
const gen = john()
console.log(gen.next().value)
console.log(gen.next().value)

//call back-functionla irrunkkura parameterla function kuduthu
access pannuratthukku peru than call back.
function fun1(name){
    console.log("hello",name);
}
function fun2(name){const heading = document.querySelector('h1')
heading.innerHTML = 'hello'+name;
    
}
    function create(callback){
        callback(' name')
    } 
   
 create (name => {
    const heading = document.querySelector('h1')
    heading.innerHTML = 'hello'+name;
    console.log('hello',name)
})

//forEach - mathod 
let arr = ['deepa','suresh','arun']
arr.forEach (arr => console.log(arr))
arr.forEach(print)
function print(val){
    console.log(val)
}
 arr.forEach((val,index,arr) => 
    arr[index] = val.toUpperCase())
*/
//map-mathod (work mudinja odane oru arraya mathi kuduthurum{})
 /*  
    let arr1 = [23,44,65,72]
    let arr2 = arr1.map(val => val*10)
    console.log(arr2)
    const input= [{key :'john', age:15},
    {key:'arun',age : 20},
    {key :'kavi',age:25},
    {key:'sami',age : 22}];
    const ages = input.map(val=>val.age)
    console.log(ages)
*/
    //Fillter - mathod(arrays element coditionukku yeththa mathiri
 
    //check panni(or)remove panni array-ya kuduthurum)
/*
    let cost = [34,156,78,90,164,43];
    let lessthen100 = cost.filter(x=> x>100)
    console.log(lessthen100)
    let lessthan90 =cost.filter((value,index,cost) =>
    (90>value))
    console.log(lessthan90) 
*/
    //reduce-mathod (ella element count check panni arraya-ya tharum)

   // let total = cost.reduce((total,element)=>total+element,0)
   // console.log(total)
   /*
    let arra = [['a','b','c'],
                ['c','d','e'],
                 ['d','e','c']]
                 let count = 0;
    let arra1 = arra.flat().reduce((obj,value)=>{
    if(obj[value]) obj[value]++
    else obj[value] =1
    return obj},{})
    console.log(arra1)
*/

    //rutuning function closure
// function outer(){
//     let v ='gadjet'
//     console.log('yes')
//     function inner(){
//         console.log("variable name ",v)
//     }
//     return inner;
// }
//  let c =outer();
// c()
/*
//closure - outer function-la irrunkkura variable-la inner function
bit and store panni vachirukkum.atha namma access pannalam.

function outer(name){
    let v ='gadjet'
    console.log('yes')
    function inner(){
        console.log("variable name ",v)
        console.log("name is "+name)
    }
    return inner;
}
 let c =outer('john');
c()

function out(x){
    function inn(y){
        return x+y
    }
    return inn
}
let a = out(10)
console.log(a(20));
console.log(a(30));*/

//class - Set and Map 

// Set - unique value only allowed(primitive data type)
/*let arr = [1,2,3,4,1,5,2,7,4];
let set = new Set(arr);
console.log(set);
set.add(8)
set.add('a')
set.add("set")
set.add(8)
set.add({name:'john',age:21})
set.add({name:'john',age:21})
console.log(set);
console.log(Array.from(set))*/
/*
Map - key value pair(key unique-a irrukkum value change 
aagalam ,same values irrukkalam)
let map = new Map();
map.set('a',4)
map.set('b',2)
map.set('c',3)
map.set('a',1)
console.log(map)
for(let val of map)
console.log(val)
for(let [key,value] of map){
    console.log(value)
}
for(let [value,key] of map)
console.log (value)
map.forEach((v,k)=>{
    console.log(k,v)
} );*/
//object oriended programing

/*class User{//class
    static  numberOfUsers = 0;
     constructor(name,age){//constructor
        this._name = name//instance variable
        this._age = age
        User.numberOfUsers++;
     }
    login(){//mathod
            console.log("hi wlcome " + this._name +" "+ this._age)
            return this
    }
    logout(){
            console.log("thankyou")
    }
    set Name (name){
       this._name  = name
    }
    set Age (age){
        this._age = age
    }
    get Name (){
       return this._name  
    }
    get Age (){
        return this._age 
    }
    get noUser(){
        return User.numberOfUsers++
    }
    // setName (name){
    //     this._name  = name
    // }
    // setAge (age){
    //     this._age = age
    // }
    // getName (){
    //    return this._name  
    // }
    // getAge (){
    //     return this._age 
    // }
    toString(){
       return "name :"+this._name +"\n age :"+ this._age
    }
}
class NewUser extends User{
    static numberOfUsers= 0;
    //@Override
    constructor(name,age){
        super(name,age)
        NewUser.NumberOfUsers++;
    }
}
// NewUser.prototype.login = function (){//mathod
//     console.log("hi wlcome " + this.name +" "+ this.age)
//     return this
// }
let user = new NewUser("john",22);
user.login().logout()
user.Name ="arun"
user.Age =23
user.login().logout()
console.log(user.toString()+" \nnumber of users :"+user.noUser)
*/
//Promise - callback extend mathod 
 /*let obj  = new Promise((fun1,fun2,fun3)=>{
    let booking  = 1;
    switch(booking){
    case 1: fun1() 
    case 2: fun2()
    case 3: fun3()
    }
 })
 function fun1 (){
    console.log("hiii")
 }
 function fun2(){
    console.log("helloollo")
 }
 function fun3(){
    console.log(" hihello")
 }
 obj.then(fun1).then(fun2).then(fun3)
 Promise.race(fun1(),fun2(),fun3())*/
function p(){return 10}
console.log(delete p());
let a =prompt("what is the number")
console.log(a*10)
 let reachA = new Promise((resolve,rejected)=>{
    let reach = false;
    if(reach)
    setTimeout(resolve,3000,"john reached")
    else rejected("not reach john")
 })
 async function fn(){
   try{ console.log("hi")
    sw = await reachA//fulfill aaguravaraikkum wait pannu 
    console.log(sw)
 }
 catch(err) {console.log(err)}
 }
 fn()
 
 function fetchData() 
 {
    return new Promise((resolve, rejected) => 
    {
        let se = false;
        if(se){
        console.log("hiii")
         resolve(850)
        }
      else 
        rejected("error")
     
    })
  }
  console.log(fetchData().then((val)=>console.log(val)))
 // console.log(fatchData())
  async function js(){
    try{
        console.log("hii")
        sa = await fetchData
    console.log(sa)
    }
    catch(err){
        console.log(err)
    }
  }
  js()
 
  
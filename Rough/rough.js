let firstno = 5
let bill ="$95"
// let msg = firstname +" "+lastname +" "+"lived in "+ city
// console.log(msg)
let msg = `"you have ${firstno} items in your cart.
 Your bill amount is ${bill}" `
console.log(msg)
//math object
//console.log(Math.log(2)) 
//String function
// let str1 = "John"
// let str2 =" soundrapandian"
// let str = str1.concat( str2)
// let bills = "70";
// console.log(str.charCodeAt())
 
// arrays
// let city =["chennai","tirunelveli","vellore"]
// let num = [2,45,78,23,45,90,"madurai",67,"theni",40]
// let sum = num.concat(city)
// console.log(sum)
let arr = [1,3,5,7,9,11]
 arr.splice(3,3,17,19,111)
console.log(arr)
arr.unshift(100)
arr.push(200)
console.log(arr.length)
arr.splice(arr.length-1,1,arr[arr.length-1]+1000)
arr.splice((arr.length-1)/2,1,0)
console.log(arr)
let jo = console.log(arr.slice(1,2))
console.log(jo)
let w = prompt("who are you")
console.log('hi',w)
console.log(" ",Number (w))

//matrix
// let ght = [[[2,4,3],[6,3,5],[9,6,2]],[2,4,3],[6,3,5],[9,6,2]]
// console.log(ght)





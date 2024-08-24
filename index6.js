// let arr1=["hello","world","abc"]
// let arr2=["xyz","abc","def"]
// let res1=arr1.map((a)=>a.toUpperCase())
// let res2=arr2.map((b)=>b.toUpperCase())
// console.log(res1);
// console.log(res2);
  
// let arr1=["xyz","abcdef"]
// let arr2=arr1.map(substr)
// function substr(a){
//     return a.substring(0,3)
// }
// console.log(arr2);

//  let arr1=["xyz","foo","bar"]
// let arr2=arr1.map(function replace(a){
//     return a.replace(/o/g,"0")
// })
// console.log(arr2);

let arr1=["hello-world","abc-def"]
let arr2=arr1.flatMap((a)=>a.split("-"))
console.log(arr2);

// let arr1=["hello","world","abc","abcdef"]
// let arr3=""
// let arr2=arr1.filter((a)=>a.length>=6)
// let result=arr3.join(arr2)
// console.log(result);


// let arr1=["hello","world","abc"]
// let arr2=arr1.map(uppercase)
// function uppercase(a){
//     return a.toUpperCase(a)+"!"
// }
// console.log(arr2);

// let arr1=["hello","world","abc"]
// let arr2=arr1.find(a=> a ==="world")
// console.log(arr2);
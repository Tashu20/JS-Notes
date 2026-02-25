console.log("a")//synchronnous
setTimeout(() => {
    console.log("b")//asynchronous
}, 5000);
setTimeout(() => {
    console.log("c")//asynchronous
},3000);
setTimeout(()=>{
    console.log("d")
},2000);
console.log("e")
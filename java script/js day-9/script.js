//const query = document.querySelector("#content p");
//console.log(query);
//queryselectorall
//const query2 = document.querySelectorAll(" p");
//console.log(query2,"query");
//for (let i = 0; i < query2.length; i++) {
   // query2[i].textContent = "helllo buddddy";
   // query2[i].style.backgroundColor = "yellow";
//}
let paras = document.getElementsByTagName("p");
//1. make all odd num the paragraphs have a yellow 
for (let i = 0; i < paras.length; i++) {
    if ((i + 1) % 2 !== 0) {
        paras[i].style.backgroundColor = "pink";
    }
}
//2. make all even num the paragraphs have a green
for (let i = 0; i < paras.length; i++) {
    if ((i + 1) % 2 === 0) {
        paras[i].style.backgroundColor = "purple";
    }
}
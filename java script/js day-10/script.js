const head = document.getElementById("heading");
//head.innerHTML="<b>Hello buddy</b>"
console.log(head.innerText);//it will show only visible text
console.log(head.textContent);//it will show all text including hidden text
console.log(head.innerHTML);//it will show all the text with its html tags/elements also

//create a ew element and set its text content
const newparagraph=document.createElement("p");
newparagraph.textContent="This is a new paragraph added by js";
console.log(newparagraph.textContent);

//append the new elements to the container
const container=document.getElementById("content");
container.appendChild(newparagraph)

//remove element
const para=document.querySelector("#content p");
container.removeChild(para);

//date method is the predefined feature of js which is used to manipulate the text and html elements. it also work as object method.
//event handel
function handelclick(){
    document.getElementById("output").textContent="Button was clicked!";
}   


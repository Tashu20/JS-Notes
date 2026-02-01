const heading = document.getElementById("myHeading");
console.log(heading);
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
console.log(heading.textContent);
heading.textContent = "Hello World!";

const subheadings = document.
getElementsByClassName("subheading");
console.log(subheadings);
for (let i = 0; i < subheadings.length; i++) {
    subheadings[i].style.color = "green";
}

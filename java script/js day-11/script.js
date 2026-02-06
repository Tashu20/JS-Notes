function handelclick(){
    document.querySelector("#heading").style.color = "red";
    document.getElementById("btn").textContent="color changed!"
}

const image = document.createElement("img");
image.setAttribute("src","https://wallpaperaccess.com/full/14303476.jpg")
image.setAttribute("alt","sylus")
document.getElementById("div").append(image)
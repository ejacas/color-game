// Variables
var colorsBtn = document.getElementsByClassName("colorsBtn");
var h1 = document.querySelector("h1")

var box1 = document.getElementsByClassName("box1");
var box2 = document.getElementsByClassName("box2");
var box3 = document.getElementsByClassName("box3");
var box4 = document.getElementsByClassName("box4");
var box5 = document.getElementsByClassName("box5");
var box6 = document.getElementsByClassName("box6");



// Generates colors on page load
 const colors = [];
 const colors1 = [];
 const colors2 = [];
 const colors3 = [];
 const colors4 = [];
 const colors5 = [];

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors1.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors2.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors3.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors4.push(randomColor);
    }
    
    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors5.push(randomColor);
    }

    box1[0].style.background = "rgba(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")"
    box2[0].style.background = "rgba(" + colors1[0] + ", " + colors1[1] + ", " + colors1[2] + ")"
    box3[0].style.background = "rgba(" + colors2[0] + ", " + colors2[1] + ", " + colors2[2] + ")"
    box4[0].style.background = "rgba(" + colors3[0] + ", " + colors3[1] + ", " + colors3[2] + ")"
    box5[0].style.background = "rgba(" + colors4[0] + ", " + colors4[1] + ", " + colors4[2] + ")"
    box6[0].style.background = "rgba(" + colors5[0] + ", " + colors5[1] + ", " + colors5[2] + ")"

    console.log(colors)
    console.log(colors1)
    console.log(colors2)
    console.log(colors3)
    console.log(colors4)
    console.log(colors5)

    h1.innerText = "RGB(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")"


// Generates colors when pressed "new colors" button
colorsBtn[0].addEventListener("click", function(){
    const colors = [];
    const colors1 = [];
    const colors2 = [];
    const colors3 = [];
    const colors4 = [];
    const colors5 = [];

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors1.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors2.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors3.push(randomColor);
    }

    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors4.push(randomColor);
    }
    
    for (let i = 0; i < 3; i++) {
        const randomColor = Math.floor(Math.random() * 255);
        colors5.push(randomColor);
    }

    // Changes box1
    box1[0].style.background = "rgba(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")"
    box2[0].style.background = "rgba(" + colors1[0] + ", " + colors1[1] + ", " + colors1[2] + ")"
    box3[0].style.background = "rgba(" + colors2[0] + ", " + colors2[1] + ", " + colors2[2] + ")"
    box4[0].style.background = "rgba(" + colors3[0] + ", " + colors3[1] + ", " + colors3[2] + ")"
    box5[0].style.background = "rgba(" + colors4[0] + ", " + colors4[1] + ", " + colors4[2] + ")"
    box6[0].style.background = "rgba(" + colors5[0] + ", " + colors5[1] + ", " + colors5[2] + ")"

    // Changes text 
    h1.innerText = "RGB(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")"
    })

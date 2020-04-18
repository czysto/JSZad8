// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

let x = window.innerWidth;
let y = window.innerHeight;

const bdy = document.querySelector("body");

document.addEventListener("click", function (e) {
    const width = e.clientX + 1;
    const height = e.clientY + 1;

    console.log(width + "," + height);

    if (width % 2 == 0 && height % 2 == 0) {
        bdy.style.backgroundColor = "red";

    } else if (width % 2 == 1 && height % 2 == 1) {
        bdy.style.backgroundColor = "blue";
    } else if (width % 2 == 1 && height % 2 == 0) {
        bdy.style.backgroundColor = "green";
    } else if (width % 2 == 0 && height % 2 == 1) {
        bdy.style.backgroundColor = "green";
    }




})
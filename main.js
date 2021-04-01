const map = document.getElementById("maps");
const nissan_cars = document.getElementById("nissan_cars");
const toyota_cars = document.getElementById("toyota_cars");
const boxing = document.getElementById("package");
const kia_cars = document.getElementById("kia_cars");
const hyundai_cars = document.getElementById("hyundai_cars");
const chevrolet_cars = document.getElementById("chevrolet_cars");
const ford_cars = document.getElementById("ford_cars");
const GMC_cars = document.getElementById("GMC_cars");
const HUD_G = document.getElementById("HUD");
const mazda_cars = document.getElementById("mazda_cars");
const honda_cars = document.getElementById("honda_cars");
const subaru_cars = document.getElementById("subaru_cars");

function hide() {
    window.scrollTo({
        top: 300,
        behavior:'smooth'

    });
    nissan_cars.style.display = "none";
    toyota_cars.style.display = "none";
    map.style.display = "none";
    boxing.style.display = "none";
    kia_cars.style.display = "none";
    hyundai_cars.style.display = "none";
    chevrolet_cars.style.display = "none";
    ford_cars.style.display = "none";
    GMC_cars.style.display = "none";
    HUD_G.style.display = "none";
    mazda_cars.style.display = "none";
    honda_cars.style.display = "none";
    subaru_cars.style.display = "none";

}

function subaru() {
    hide();
    subaru_cars.style.display = "flex";
}

function honda() {
    hide();
    honda_cars.style.display = "flex";
}

function mazda() {
    hide();
    mazda_cars.style.display = "flex";
}

function HUD() {
    hide();
    HUD_G.style.display = "flex";
}

function GMC() {
    hide();
    GMC_cars.style.display = "flex";
}

function ford() {
    hide();
    ford_cars.style.display = "flex";
}

function chevrolet() {
    hide();
chevrolet_cars.style.display = "flex";
}

function nissan(){
    hide();
 nissan_cars.style.display = "flex";
}
    
function toyota() {
    hide();
 toyota_cars.style.display = "flex";
}

function maps() {
    hide();
    map.style.display = "flex";
}

function box () {
    hide();
    boxing.style.display = "flex";

}

function kia () {
    hide();
kia_cars.style.display= "flex";
}

function hyundai () {
    hide();
    hyundai_cars.style.display = "flex";
}



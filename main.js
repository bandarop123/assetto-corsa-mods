let map = document.getElementById("maps");
const nissan_cars = document.getElementById("nissan_cars");
let toyota_cars = document.getElementById("toyota_cars");
const boxing = document.getElementById("package");
const kia_cars = document.getElementById("kia_cars");
const hyundai_cars = document.getElementById("hyundai_cars")

function hide() {
    nissan_cars.style.display = "none";
    toyota_cars.style.display = "none";
    map.style.display = "none";
    boxing.style.display = "none";
    kia_cars.style.display = "none";
    hyundai_cars.style.display = "none";
}


function nissan(){
    hide();
 nissan_cars.style.display = "block";
}
    
function toyota() {
    hide();
 toyota_cars.style.display = "block";
}

function maps() {
    hide();
    map.style.display = "block";
}

function box () {
    hide();
    boxing.style.display = "block";

}

function kia () {
    hide();
kia_cars.style.display= "block";
}

function hyundai () {
    hide();
    hyundai_cars.style.display = "block";
}



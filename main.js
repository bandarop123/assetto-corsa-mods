let map = document.getElementById("maps");
const nissan_cars = document.getElementById("nissan_cars");
let toyota_cars = document.getElementById("toyota_cars");
const boxing = document.getElementById("package");
const kia_cars = document.getElementById("kia_cars");
const hyundai_cars = document.getElementById("hyundai_cars");
const chevrolet_cars = document.getElementById("chevrolet_cars");
const ford_cars = document.getElementById("ford_cars");
const GMC_cars = document.getElementById("GMC_cars");

function hide() {
    nissan_cars.style.display = "none";
    toyota_cars.style.display = "none";
    map.style.display = "none";
    boxing.style.display = "none";
    kia_cars.style.display = "none";
    hyundai_cars.style.display = "none";
    chevrolet_cars.style.display = "none";
    ford_cars.style.display = "none";
    GMC_cars.style.display = "none";

}

function GMC() {
    hide();
    GMC_cars.style.display = "block";
}

function ford() {
    hide();
    ford_cars.style.display = "block";
}

function chevrolet() {
    hide();
chevrolet_cars.style.display = "block";
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



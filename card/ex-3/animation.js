let cube = document.querySelector(".cube");

function updatePerspectiveOrigin() {
    scene.style.perspectiveOrigin = originX + "% " + originY + "%";
}

let button = document.querySelector(".button");

button.addEventListener("click", function () {
    cube.classList.toggle("is-spinning");
});

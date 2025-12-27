// START SIDEBAR TOGGLE FOR MOBILE VIEW
const _mob = document.getElementById("menu-toggle");
const _sidebar = document.getElementById("sidebar");
const _close_sidebar = document.getElementById("close-sidebar");

_mob.addEventListener("click", () => {
    _close_sidebar.classList.remove("hidden");
    _sidebar.style.transform = "translateX(-200px)";
})

_close_sidebar.addEventListener("click", () => {
    _sidebar.style.transform = "translateX(200px)";
    _close_sidebar.classList.add("hidden");
});
// END SIDEBAR TOGGLE FOR MOBILE VIEW

// START FORM INPUT
let _name = document.forms["reg"]["name"];
let _email = document.forms["reg"]["email"];
let nameError = document.getElementById("name-span");
let emailError = document.getElementById("email-span");

function myVal(e) {
    nameError.style.display = "none";
    emailError.style.display = "none";
    let nameVal = _name.value;
    let emailVal = _email.value;

    if (nameVal.length <= 3) {
        nameError.style.display = "flex";
        e.preventDefault();
    } else {
        nameError.style.display = "none";
    }

    if (
        (emailVal.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) == -1
    ) {
        emailError.style.display = "flex";
        e.preventDefault();
    } else {
        emailError.style.display = "none";
    }
}
// END FORM INPUT
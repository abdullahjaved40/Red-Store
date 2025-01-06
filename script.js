// -------------Js For Toggle Menu----------------------

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px" ){
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}

// -------------Js For Product gallery----------------------

// Select the main product image
var productImg = document.getElementById("productimg");

// Select all small images
var smallImgs = document.getElementsByClassName("smallimg");

// Add click event listeners to all small images
for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].onclick = function() {
        productImg.src = smallImgs[i].src; // Change the main image's source to the clicked image's source
    }
}

// -------------Js For Toggle Form----------------------
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function toggleForm(isRegister) {
    if (isRegister) {
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    } else {
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }
}

function register() {
    toggleForm(true);
}

function login() {
    toggleForm(false);
}


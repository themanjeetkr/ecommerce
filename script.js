var MenuItems = document.getElementById("menu-items");
MenuItems.style.maxHeight = "0px"

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    }
    else {
        MenuItems.style.maxHeight = "0px"
    }
}

// js for product gallary

var productImg =document.getElementById("productImg");
var smallImg=document.getElementsByClassName("small-img");
smallImg[0].onclick=function(){
    productImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    productImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    productImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    productImg.src=smallImg[3].src;
}

var logInForm=document.getElementById("loginform");
var regForm=document.getElementById("regform");
var indiactor=document.getElementById("indicator");

function Register(){
    regForm.style.transform = "translateX(0px)";
    logInForm.style.transform = "translateX(0px)";
    indiactor.style.transform = "translateX(100px)";
}
function LogInForm(){
    regForm.style.transform = "translateX(300px)";
    logInForm.style.transform = "translateX(300px)";
    indiactor.style.transform = "translateX(0px)";
}






// js for toggle form




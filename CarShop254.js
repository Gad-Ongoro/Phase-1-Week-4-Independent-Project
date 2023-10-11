let form = document.querySelector("form");
let body = document.querySelector("body");
let light = document.querySelector("img.light");
let dark = document.querySelector("img.dark");
let userInfo = document.querySelector("div.user-info");
let userInfoInput = document.querySelectorAll("div#user-info input");
let carInfoP = document.querySelectorAll("div.eachCar p");

//console.log(userInfoInput);

//console.log(dark);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to place an order?")){
        alert("Order placed successfully");
    } else {
        alert("Order cancelled");
    };
});

function lightDarkMode () {
    light.addEventListener("click", function(e) {
        body.style.backgroundColor = "rgba(255, 255, 255)";
        userInfo.style.color = "navy";

        userInfoInput.forEach(function(userInput){
            userInput.style.border = "2px solid rgb(222, 111, 250, 0.6)";
        });

        carInfoP.forEach(function(p){
            p.style.color = "navy";
        })
    })
    dark.addEventListener("click", function(e) {
        body.style.backgroundColor = "rgba(0, 20, 100)";
        userInfo.style.color = "white";

        userInfoInput.forEach(function(userInput){
            userInput.style.border = "none";
        });

        carInfoP.forEach(function(p){
            p.style.color = "white";
        })
    })
};
lightDarkMode();

//fetch 
function fetchDB() {
    fetch("https://carshop-edbk.onrender.com/cars")
    .then(res => res.json())
    .then(function(data){
        console.log(data)
    })
};
fetchDB();
let form = document.querySelector("form");
let body = document.querySelector("body");
let light = document.querySelector("img.light");
let dark = document.querySelector("img.dark");
let userInfo = document.querySelector("div.user-info");

console.log(userInfo);

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
    })
    dark.addEventListener("click", function(e) {
        body.style.backgroundColor = "rgba(0, 20, 100)";
        userInfo.style.color = "white";
    })
};
lightDarkMode();
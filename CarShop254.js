let form = document.querySelector("form");
let body = document.querySelector("body");
let light = document.querySelector("img.light");
let dark = document.querySelector("img.dark");
let userInfo = document.querySelector("div.user-info");
let userInfoInput = document.querySelectorAll("div#user-info input");
let eachCarDiv = document.querySelectorAll("div.eachCar");
let carInfoP = document.querySelectorAll("div.eachCar p");
let mainPostPage = document.querySelector("div.posts-div");
let showAllBtn = document.querySelector("button.show-all");

//Order Details
let fullNameInput = document.querySelector("input#full-name");
let emailInput = document.querySelector("input#mail");
let fullNameP = document.querySelector("p#full-name");
let carOrdered = document.querySelector("p#car-ordered");
let emailP = document.querySelector("p#email");

console.log(emailInput);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // if (window.confirm("Are you sure you want to place an order?")){
    //     alert("Order placed successfully");
    // } else {
    //     alert("Order cancelled");
    // };
    buyerInfoHandler();
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

// car fetch 
function fetchDB() {
    fetch("https://carshop-edbk.onrender.com/cars")
    .then(res => res.json())
    .then(function(data){
    //console.log(data)

        data.forEach(function(car){
            showAllBtn.addEventListener("click", function(e){
                let postDiv = document.createElement("div.each-car");
                postDiv.style.border = "1.3px solid rgb(30, 130, 255)";
                postDiv.style.borderRadius = "10px";
                postDiv.style.margin = "5px";
                postDiv.style.transition = "all 0.4s";

                postDiv.addEventListener("mouseenter", e => {
                    postDiv.style.transform = "scale(1.025)";
                    //console.log(e);
                })
                postDiv.addEventListener("mouseleave", e => {
                    postDiv.style.transform = "scale(1)";
                    //console.log(e);
                })
                postDiv.innerHTML = `
                    <img src="${car.image}">
                    <div style="
                            margin:10px;
                            ">
                        <p class="c-model"> ${car.model} </p>
                        <p class="price-kes"> Ksh. <span> ${car.price} </span> </p>
                        <p class="c-year"> ${car.year} </p>
                        <button type="button" class="order-btn"> <a href="#user-info" class="order-btn-link"> Order Now </a></button>
                    </div>
                `;
                mainPostPage.appendChild(postDiv);

                eachCarDiv.forEach(post => {
                    post.style.display = "none";
                });
            })
        });
    })
};
fetchDB();

// user details and oder handler
function buyerInfoHandler(){
    let customerDetails = {
        full_Name: fullNameInput.value,
        email_account: emailInput.value
    };
    console.log(customerDetails);
    fetch("https://carshop-edbk.onrender.com/user"//, {
        //method: "POST",
        //headers: {
            //"Content-Type" : "application/json"
        //},
        //body: JSON.stringify(customerDetails)
    //}
    )
    .then(res => res.json())
    .then(function(data){
        console.log(data)
        // data.forEach(function(buyer){
        //     fullNameP.innerHTML = buyer.full_Name;
        //     emailInput.innerHTML = buyer.email_account;
        // });
    }
    );
};
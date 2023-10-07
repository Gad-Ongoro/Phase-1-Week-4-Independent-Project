let form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to place an order?")){
        alert("Order placed successfully");
    } else {
        alert("Order cancelled");
    };
});
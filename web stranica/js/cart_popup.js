document.getElementById("btn1").addEventListener("click", function() {
    var box1 = document.getElementById("cart");
    if (box1.style.display == "block") {
        box1.style.display = "none";
    } else {
        box1.style.display = "block";
    }
})
document.getElementById("btn").addEventListener("click", function() {
    var box1 = document.getElementById("cart");
    if (box1.style.display == "block") {
        box1.style.display = "none";
    } else {
        box1.style.display = "block";
    }
})

function checkout() {
    document.location.href = "checkout_information.html"
}

function men() {
    document.location.href = "men_category_page.html"
}

function women() {
    document.location.href = "women_category_page.html"
}

function checkout() {
    document.location.href = "checkout_information.html"
}

function product() {
    document.location.href = "product.html"
}

function scrollToTop() {
    window.scrollTo(0, 0);
}
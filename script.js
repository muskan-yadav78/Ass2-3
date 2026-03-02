// =======================
// FORM VALIDATION
// =======================

document.getElementById("regForm").addEventListener("submit", function (e) {  //form validation
    e.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let msg = document.getElementById("message");

    // All fields mandatory
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        msg.innerHTML = "All fields are mandatory!";
        msg.style.color = "red";
        return;
    }

    // Phone validation (10 digits only)
    if (!/^\d{10}$/.test(phone)) {
        msg.innerHTML = "Phone number must be 10 digits!";
        msg.style.color = "red";
        return;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        msg.innerHTML = "Invalid Email format!";
        msg.style.color = "red";
        return;
    }

    // Password validation
    let passPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passPattern.test(password)) {
        msg.innerHTML = "Password must contain 7 characters, 1 capital, 1 digit & special char (&,$,#,@)";
        msg.style.color = "red";
        return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        msg.innerHTML = "Passwords do not match!";
        msg.style.color = "red";
        return;
    }

    msg.innerHTML = "Registration Successful!";
    msg.style.color = "green";
});

// =======================
// DOM MANIPULATION
// =======================

// Change image source
function changeImage() {
    document.getElementById("myImage").src =
        "https://via.placeholder.com/150/0000FF";
}

// Add text node
function addText() {
    let textNode = document.createTextNode(" Text added using DOM. ");
    document.getElementById("textContainer").appendChild(textNode);
}

// Delete node
function deleteText() {
    let container = document.getElementById("textContainer");
    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Change CSS using DOM
document.getElementById("mainTitle").style.position = "relative";
document.getElementById("mainTitle").style.left = "10px";

// =======================
// jQuery Section
// =======================

$(document).ready(function () {

    // Change button text using jQuery
    $("#changeBtn").click(function () {
        $("#registerBtn").text("Submitted");
    });

    // Set background image using jQuery CSS
    $("body").css("background-image", "linear-gradient(#e0f2fe, #f8fafc)");

    // Access form data using jQuery
    $("#registerBtn").click(function () {
        let name = $("#username").val();
        console.log("Username (jQuery): " + name);
    });

    // Add attribute using jQuery
    $("#email").attr("placeholder", "example@abc.com");

});

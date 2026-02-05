// LOGIN FUNCTION (demo)
function login() {
    alert("Login successful (Demo)");
    window.location.href = "home.html";
}

// SIGNUP FUNCTION (demo)
function signup() {
    alert("Signup successful (Demo)");
    window.location.href = "index.html";
}

// IMAGE UPLOAD CHECK
function predictDisease() {
    let fileInput = document.getElementById("imageInput");

    if (fileInput.files.length === 0) {
        alert("Please select an image");
        return;
    }

    // Demo prediction
    localStorage.setItem("disease", "Brown Spot");
    localStorage.setItem("crop", "Rice");
    localStorage.setItem("solution", "Use recommended fungicide");

    window.location.href = "result.html";
}

// SHOW RESULT ON RESULT PAGE
function showResult() {
    document.getElementById("disease").innerText =
        localStorage.getItem("disease");

    document.getElementById("crop").innerText =
        localStorage.getItem("crop");

    document.getElementById("solution").innerText =
        localStorage.getItem("solution");
}
function previewImage() {
    let fileInput = document.getElementById("imageInput");
    let preview = document.getElementById("preview");

    let file = fileInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function () {
            preview.src = reader.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

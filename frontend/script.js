function login() {
    alert("Login successful (Demo)");
    window.location.href = "home.html";
}

// SIGNUP FUNCTION (demo)
function signup() {
    alert("Signup successful (Demo)");
    window.location.href = "index.html";
}





function predictDisease() {

  const fileInput = document.getElementById("imageInput");

  if (!fileInput.files.length) {
    alert("Please select an image first!");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {

    // Image ko base64 me save karo
    localStorage.setItem("selectedImage", e.target.result);

    // Demo data
    localStorage.setItem("crop", "Tomato");
    localStorage.setItem("disease", "Leaf Spot");
    localStorage.setItem("solution", "Apply fungicide and remove infected leaves.");

    window.location.href = "result.html";
  };

  reader.readAsDataURL(file);
}


function logout() {
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "index.html";
}

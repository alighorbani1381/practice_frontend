var icon = document.querySelector(".toggle-password");
var inputText = document.querySelector("#inputText");
icon.addEventListener("click", function () {
  if (icon.classList.contains("fa-eye")) {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    inputText.type = "password";
  } else if (icon.classList.contains("fa-eye-slash")) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    inputText.type = "text";
  }
});

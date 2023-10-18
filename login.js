const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace this with your authentication logic
  if (username === "your_username" && password === "your_password") {
    message.textContent = "Login successful!";
  } else {
    message.textContent = "Login failed. Please check your credentials.";
  }
});

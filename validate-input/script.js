document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    message.textContent = "Please enter a valid email address.";
  } else {
    message.textContent = "";
    alert("Form submitted successfully!");

  }
});

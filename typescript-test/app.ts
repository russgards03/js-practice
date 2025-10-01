// QA test expectations
const expectedUsername = "testuser";
const expectedPassword = "password123";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm") as HTMLFormElement;
  const usernameInput = document.getElementById("username") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Fake QA validation
    if (enteredUsername === expectedUsername && enteredPassword === expectedPassword) {
      console.log("✅ QA Test Passed: Correct credentials");
      alert("Login successful (QA Test Passed)");
    } else {
      console.log("❌ QA Test Failed: Incorrect credentials");
      alert("Login failed (QA Test Failed)");
    }
  });
});

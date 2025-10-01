// QA test expectations
var expectedUsername = "testuser";
var expectedPassword = "password123";
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("loginForm");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var enteredUsername = usernameInput.value;
        var enteredPassword = passwordInput.value;
        // Fake QA validation
        if (enteredUsername === expectedUsername && enteredPassword === expectedPassword) {
            console.log("✅ QA Test Passed: Correct credentials");
            alert("Login successful (QA Test Passed)");
        }
        else {
            console.log("❌ QA Test Failed: Incorrect credentials");
            alert("Login failed (QA Test Failed)");
        }
    });
});

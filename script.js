// Function to handle form submission
function submitForm(event) {
  if (captchaCode.toUpperCase() === expectedCode.toUpperCase()) {
    alert(
      `Form submitted successfully!\n\nName: ${
        document.getElementById("name").value
      }\nEmail: ${document.getElementById("email").value}\nMessage: ${
        document.getElementById("message").value
      }`
    );
    refreshCaptcha();
  } else {
    alert("CAPTCHA code is incorrect. Please try again.");
    refreshCaptcha();
  }
}

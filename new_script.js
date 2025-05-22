document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const inputs = form.querySelectorAll("input, select");
    let isValid = true;
    let message = "";

    // Input values
    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const phone = inputs[2].value.trim();
    const email = inputs[3].value.trim();
    const password = inputs[4].value.trim();
    const gender = inputs[5].value;
    const dob = inputs[6].value;

    // Validation logic
    if (!firstName || !lastName || !phone || !email || !password || !gender || !dob) {
      message = "Please fill out all fields.";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(phone)) {
      message = "Please enter a valid phone number.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      message = "Please enter a valid email address.";
      isValid = false;
    } else if (password.length < 6) {
      message = "Password should be at least 6 characters long.";
      isValid = false;
    }

    // Feedback
    if (isValid) {
      alert(`Thank you, ${firstName}! Your sign-up was successful.`);
      form.reset();
    } else {
      alert(message);
    }
  });
});
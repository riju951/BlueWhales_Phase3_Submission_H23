document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointment-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // form.addEventListener("home", function (event) {
    //   const linkURL = "file:///C:/Users/saksh/OneDrive/Desktop/oxyG.html#";
    //   event.preventDefault();

    // Process form data here
    // You can use FormData to gather the form data and then perform actions accordingly
    //});
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttonContainer = document.getElementById("button-container");

  // Create the button element
  const newButton = document.createElement("button");

  newButton.textContent = "Click Me"; // Button text

  // Add an event listener to the button
  newButton.addEventListener("click", function () {
    alert("Button clicked!"); // Replace with your desired action
  });

  // Append the button to the container
  buttonContainer.appendChild(newButton);

  document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("clickableImage");

    imageElement.addEventListener("click", function () {
      // Get the current website's URL
      const currentURL = "C:/Users/saksh/OneDrive/Desktop/oxyG.html#";
      // Redirect to the same website
      //   window.location.href = currentURL;
    });
  });
});

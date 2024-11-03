const mainButton = document.getElementById("mainButton");
const buttonContainer = document.getElementById("buttonContainer");

mainButton.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.innerText = `Yangi tugma ${buttonContainer.childElementCount++}`;
  buttonContainer.appendChild(newButton);
});

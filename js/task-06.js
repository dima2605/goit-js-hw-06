const textInput = document.querySelector("#validation-input");
console.log(textInput);
const lengthInput = textInput.getAttribute("data-length");
console.log(lengthInput);

const inputBlur = (event) => {
  const inputValid = event.currentTarget.value.length === Number(lengthInput);
  if (inputValid) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
};

textInput.addEventListener("blur", inputBlur);

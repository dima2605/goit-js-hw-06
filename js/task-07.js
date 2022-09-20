const input = document.querySelector("#font-size-control");

const inputText = document.querySelector("#text");

input.addEventListener("input", (event) => {
  inputText.style.fontSize = `${event.currentTarget.value}px`;
});

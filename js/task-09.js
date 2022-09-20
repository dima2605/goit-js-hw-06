const refs = {
  changeColor: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};

function handleClick() {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.background = currentColor;
}

refs.changeColor.addEventListener("click", handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


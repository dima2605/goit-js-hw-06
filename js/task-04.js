let value = 0;
const buttonReduceRef = document.querySelector('[data-action="decrement"]');
const buttonIncreaseRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

buttonReduceRef.addEventListener("click", () => {
  value -= 1;
  valueRef.textContent = value;
});

buttonIncreaseRef.addEventListener("click", () => {
  value += 1;
  valueRef.textContent = value;
});

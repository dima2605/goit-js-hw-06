const itemsEl = document.querySelectorAll('.item')
console.log('Number of categories', itemsEl.length);
itemsEl.forEach(item => {
  const categoryEl = item.querySelector("h2");
  console.log('Category:', categoryEl.textContent);
  const elementsEl = item.querySelectorAll('li')
  console.log('Elements:', elementsEl.length);
})

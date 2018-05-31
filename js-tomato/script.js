const form = document.querySelector('.form');
const container = document.querySelector('.tomato-container');

form.addEventListener('submit', event => {
  event.preventDefault();
  const div = document.createElement('div');
  div.textContent = 'tomato!!';
  div.style.color = 'tomato';
  div.addEventListener('click', ({ target }) => {
    target.parentNode.removeChild(target);
  })
  container.appendChild(div);
})
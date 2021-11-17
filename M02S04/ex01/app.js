const box = document.querySelector('.box');
//bad selector;
const applyButton = document.querySelector('button[title="Aplica"]');
const animateClass = 'animate-class';

setTimeout(() => {
  box.classList.add(animateClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animateClass);
  }, 1 * 1000);
}, 1 * 1000);

applyButton.addEventListener('click', (event) => {
  //element on which the event was bound
  const applyButton = event.currentTarget;
  box.classList.toggle(animateClass);

  let buttonText = 'Aplica';
  if (box.classList.contains(animateClass)) {
    buttonText = 'Elimina';
  }
  applyButton.innerText = buttonText;
});

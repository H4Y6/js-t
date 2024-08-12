const btnAddRef = document.querySelector('button[data-add]');
const inputRef = document.querySelector('input[data-value');

btnAddRef.addEventListener('click', () => {
  console.log('click');
  console.log(inputRef.value);
});
console.log(inputRef.value);

console.dir(btnAddRef);
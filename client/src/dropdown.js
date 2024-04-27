const dropdownButton = document.querySelector('#dropdownbutton');
const dropdownMenu = document.querySelector(`#dropdownHover`);

console.log(dropdownButton)
console.log(dropdownMenu)

dropdownButton.addEventListener('focus', () => {
  dropdownMenu.classList.remove('hidden');
});

dropdownButton.addEventListener('blur', () => {
  dropdownMenu.classList.add('hidden');
});

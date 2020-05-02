const selectInput = document.querySelector('.style-select__input');


selectInput.addEventListener('focus', (e) => {
    e.target.value = 'куб';
})
selectInput.addEventListener('blur', (e) => {
    e.target.value = '';
})
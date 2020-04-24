const productBtn = document.querySelector('.nav-item__activ');
const menuProduct = document.querySelector('.nav-list');

productBtn.addEventListener('mouseover', (e) => {
    menuProduct.classList.add('nav-list__activ');
});
productBtn.addEventListener('mouseout', (e) => {
    menuProduct.classList.remove('nav-list__activ');
})

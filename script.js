let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.toggle('active');
} 

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.toggle('active');
} 

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.toggle('active');
} 

document.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
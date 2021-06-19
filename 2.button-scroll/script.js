
let scrollBtn = document.querySelector('.scroll');

window.addEventListener('scroll', event => {
    if (window.scrollY > 300){
        scrollBtn.classList.add('show');
    }else{
        scrollBtn.classList.remove('show');
    }
})

scrollBtn.addEventListener('click', event => {
    if (scrollBtn.classList.contains('show')){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
})
let thems = document.querySelector('.thems');

if (localStorage.getItem('color')){
    let color = localStorage.getItem('color');
    document.body.className = color;
}

Array.from(thems.children).forEach((them) => {
    them.addEventListener('click', event => {
        let color = event.target.dataset.color;
        localStorage.setItem('color', color);
        document.body.className = color;

    })
})

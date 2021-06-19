let accordions = document.querySelector('.accordions');

Array.from(accordions.children).forEach((children) => {
    if (children.classList.contains('show')){
        children.querySelector('div').style.maxHeight =  children.querySelector('div').scrollHeight + 30 + 'px';
    }

    children.querySelector('span').addEventListener('click', event => {
        event.target.parentElement.classList.toggle('show');
        let nexDiv = event.target.nextElementSibling;
        if (event.target.parentElement.classList.contains('show')){
            nexDiv.style.maxHeight = nexDiv.scrollHeight + 30 + 'px';
        }else{
            nexDiv.style.maxHeight = null;
        }
       
        Array.from(accordions.children).forEach((ch) => {
            if (ch != children){
                ch.classList.remove('show')
                ch.querySelector('div').style.maxHeight = null;
            };
        })
    })
})

let openBtnsPopup = document.querySelectorAll('.popup-btn');

if (openBtnsPopup){
    var popupWrapper = document.createElement('div');
    popupWrapper.className = 'popup-wrapper';
    document.body.prepend(popupWrapper)
}

openBtnsPopup.forEach((openBtnPopup) => {
    openBtnPopup.addEventListener('click', event => {
        let popup = openBtnPopup.nextElementSibling;
        popup.classList.add('show');
        popupWrapper.classList.add('show');
    
        let btnCloses = document.querySelectorAll('.close-popup');
        let closePopupFunc =  event => {
            popup.classList.remove('show');
            popupWrapper.classList.remove('show');
        }
    
        btnCloses.forEach((btn) => {
            btn.addEventListener('click', closePopupFunc)
        })
        popupWrapper.addEventListener('click', closePopupFunc)
    })
})

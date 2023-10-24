let btn1 = document.querySelector('#btn-get');
let btn2 = document.querySelector('#pop-button-dismiss');

let popUp = () => {
    let currently = document.querySelector('.success-tab-pop').style.display='flex';
    let getting = document.querySelector('.main-temp-content').style.display='none';
}

let closePopUp = () => {
    let currently = document.querySelector('.success-tab-pop').style.display='none';
    let getting = document.querySelector('.main-temp-content').style.display='flex';
}

btn1.onclick = popUp;
btn2.onclick = closePopUp;

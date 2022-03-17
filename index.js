import {getAdvice} from "./api/advice.js";

const randomBtn = document.querySelector('.btn-random-advice');
const sectionContainer = document.querySelector('.advice-content');
const adviceID = document.querySelector('.advice-id');
const childToRemove = document.querySelector('.child-remove');

const setAdvice = (data) => {
    
    if(document.body.contains(document.querySelector('.child-remove'))) {
        adviceID.removeChild(document.querySelector('span'));
    }

    if(document.body.contains(document.querySelector('.advice-main'))) {
        sectionContainer.removeChild(document.querySelector('.advice-main'));
    }

    const advice_id = document.createElement('span');
    advice_id.className = 'child-remove';

    const advice_main = document.createElement('p');
    advice_main.className = 'advice-main';

    advice_id.textContent = `#${data.slip.id}`;
    adviceID.appendChild(advice_id);

    advice_main.textContent = data.slip.advice;

    
    sectionContainer.appendChild(advice_main);
}


randomBtn.addEventListener('click', () =>{
    getAdvice()
        .then((data)=> setAdvice(data))
});

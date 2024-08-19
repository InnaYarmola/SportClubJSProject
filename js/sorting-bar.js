import { data, initialDataArr, sortingBarTitle } from "./index.js";
import { renderCardFunction, trainersCardsContainerEl } from "./rendering-cards.js";

const sortingBar = document.querySelector('.sorting');

const sortData = () => {
    sortingBar.addEventListener('click', (event) => {

        if (event.target === event.currentTarget || event.target === sortingBarTitle) {
            return;
        }
    
        document.querySelector('.sorting__btn--active')?.classList.remove('sorting__btn--active');
    
        event.target.classList.add('sorting__btn--active');
    
        switch (event.target.innerText.toLowerCase()) {
    
            case 'за прізвищем': {
                data.sort((a, b) => a["last name"].localeCompare(b["last name"]));
                break;
            }
            case 'за досвідом': {
                data.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
                break;
            }
            default: {
                break;
            }
        };
    
        trainersCardsContainerEl.innerHTML = '';
    
        if (event.target.innerText.toLowerCase() === 'за замовчанням') {
            renderCardFunction(initialDataArr);
    
        } else {
            renderCardFunction(data);
        }
    
    });
}

export const sortDataFunction = sortData;
export const sortingBarElement = sortingBar;
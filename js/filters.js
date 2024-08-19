import { DATA, renderCard, sortData, trainersCardsContainer } from './index.js'

const filtersForm = document.querySelector('.sidebar__filters');

const filterByDirection = (direction, arr) => {

    let filteredData;

    switch (direction) {
        case 'all': {
            filteredData = arr.filter(el => true);
            break;
        }
        case 'gym': {
            filteredData = arr.filter(el => el.specialization === 'Тренажерний зал');
            break;
        }
        case 'fight club': {
            filteredData = arr.filter(el => el.specialization === 'Бійцівський клуб');
            break;
        }
        case 'kids club': {
            filteredData = arr.filter(el => el.specialization === 'Дитячий клуб');
            break;
        }
        case 'swimming pool': {
            filteredData = arr.filter(el => el.specialization === 'Басейн');
            break;
        }
    };

    return filteredData;
};

const filterByCategory = (category, arr) => {

    let filteredData;

    switch (category) {
        case 'all': {
            filteredData = arr.filter(el => true);
            break;
        }
        case 'master': {
            filteredData = arr.filter(el => el.category === 'майстер');
            break;
        }
        case 'specialist': {
            filteredData = arr.filter(el => el.category === 'спеціаліст');
            break;
        }
        case 'instructor': {
            filteredData = arr.filter(el => el.category === 'інструктор');
            break;
        }
        default: {
            break;
        }
    };
    return filteredData;
};

export const renderWithFilters = (data) => {

    const selectedDirection = document.querySelector('input[name="direction"]:checked').value;
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    const filteredByDirection = filterByDirection(selectedDirection, data);
    const filteredArr = filterByCategory(selectedCategory, filteredByDirection);

    trainersCardsContainer.innerHTML = '';

    renderCard(filteredArr);

    return filteredArr;
};

export const filterData = () => {

    filtersForm.addEventListener('submit', (event) => {
        event.preventDefault();

        sortData(renderWithFilters(DATA)); 
    });
};









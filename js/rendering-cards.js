const trainerCardTemplate = document.querySelector('#trainer-card').content;
const trainersCardsContainer = document.querySelector('.trainers-cards__container');
let showMoreButtonCollection;

const renderCard = (arr) => {

	arr.forEach(trainer => {
		const trainerCard = trainerCardTemplate.cloneNode(true);
		trainerCard.querySelector('.trainer__img').src = trainer.photo;
		trainerCard.querySelector('.trainer__name').innerText = `${trainer["last name"]} ${trainer["first name"]}`;
		trainersCardsContainer.append(trainerCard);
	});

	showMoreButtonCollection = document.querySelectorAll('.trainer__show-more');
};

export const renderCardFunction = renderCard;
export const trainersCardsContainerEl = trainersCardsContainer;
export const showMoreButtonCollectionEl = showMoreButtonCollection;



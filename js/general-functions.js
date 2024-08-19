import { data } from "./index.js";

let scrollPosition = null;

const generalFunctions = {

    findTrainerData: (fullName) => {
        let trainerObj = {};
        data.forEach(el => {
            if (`${el["last name"]} ${el["first name"]}` === fullName) {
                for (let key in el) {
                    trainerObj[key] = el[key];
                };
            };
        });
        return trainerObj;
    },

    disableScroll: () => {
        scrollPosition = window.scrollY;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
    },

    enableScroll: () => {
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
    },
};

export const findTrainerData = generalFunctions.findTrainerData;
export const disableScroll = generalFunctions.disableScroll;
export const enableScroll = generalFunctions.enableScroll;
import getRandomDish from "./sources/getRandomDish.js";
import search from "./sources/search.js";

window.addEventListener("DOMContentLoaded", async () => {

    console.log('working here')

    search()

    const randomDish = document.querySelector('.random')
    randomDish.addEventListener('click' , getRandomDish)

})


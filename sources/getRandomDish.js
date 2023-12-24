let url = "https://www.themealdb.com/api/json/v1/1/random.php"

const result = document.querySelector('.result')
result.innerHTML = ``

const getRandomDish = async () => {

    console.log('getting a random dish')

    try {
        
        const response = await fetch(url)
        const data = await response.json()

        // console.log(data)
        let dish = data.meals[0]
        console.log(dish)

        result.innerHTML += `
        <div class="dish-card">
            <img src="${dish.strMealThumb}" alt="">
            <h2>Dish : ${dish.strMeal}</h2>
            <h3>Discription : It is a ${dish.strCategory} dish from ${dish.strArea}</h3>
            <h3>Instruction : ${dish.strInstructions}</h3>
            <a href="${dish.strSource}" class="btn"> <h4>THE INFORMATION IS FROM HERE <3</h4> </a>
            <a href="${dish.strYoutube}" target="_blank" class="btn">Watch</a>
        </div>
        `
        


    } catch (error) {
        console.log('no')
    }

}

export default getRandomDish
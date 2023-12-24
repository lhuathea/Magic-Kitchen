let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const searchForm = document.querySelector('#searchForm')
const searchValue = document.querySelector('#search')
const result = document.querySelector('.search-result')
result.innerHTML = ``

searchForm.addEventListener( 'submit', (e) => {
    e.preventDefault()

    let searchTerm = searchValue.value 
    if (!searchTerm) {
        result.innerHTML = `
        <div class="error">No dish founded</div>
        `
        return;
    }else {
        search(searchTerm)
    }

})

const search = async (term) => {
    try {
        
        const response = await fetch(url+term)
        const data = await response.json()

       
        let dish = data.meals[0]
        
        if (dish.length < 1) {
            result.innerHTML = `
            <div class="error">Please enter valid search term</div>
            `
        } else {
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
        }
        

        

    } catch (error) {
        console.log('?')
    }
}


  
export default search
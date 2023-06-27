
const loadMeals = (searchText) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    // fetch error handling
    .catch(error => {
        console.log(error)
    });
}
 
const displayMeals = meals =>{
    // step-1: get container element
   const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = ''

    meals.forEach (meal =>{
        console.log(meal)
        // step-2: create child for each element
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        // step-3: set content of the child
        mealDiv.innerHTML =`
        <div class="col ">
        <div class="card ">   
          <img src="${meal.strMealThumb
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

            <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
          Details
        </button>
          </div>
        </div>
      </div>
        `
        // step-4: appendChild
        mealsContainer.appendChild(mealDiv)
    })

};

document.getElementById('searchMeals').addEventListener('click', function(){
  const searchText = document.getElementById('search-field').value ;
  // search Meals
  console.log(searchText)
  loadMeals(searchText)
});

const loadMealDetails = (idMeal) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
 fetch(url)
 .then(res => res.json())
 .then(data => displayMealDetails(data.meals[0]));
  
}
const displayMealDetails = meal =>{
 document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
 const mealDetails =document.getElementById('mealDetailsBody');
  mealDetails.innerHTML =`
  <img class=" img-fluid" src="${meal.strMealThumb}">
  `
}


loadMeals('rice')
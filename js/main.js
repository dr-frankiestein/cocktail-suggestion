// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// document.querySelector("#cocktail button").addEventListener('click', () => {
//   let cocktail = document.querySelector("#cocktail input").value
//   getCocktail(cocktail)
  

// })

// function getCocktail(cocktail) {
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks[0])
//       document.querySelector('h2').innerText = data.drinks[0].strDrink
//       document.querySelector('img').src = `${data.drinks[0].strDrinkThumb}/preview`
//       document.querySelector('h3').innerText = data.drinks[0].strInstructions
//       let ingredients = []
//           Object.keys(data.drinks[0]).forEach(key => {
//             if (key.indexOf("strIngredient") >= 0 && 
//             data.drinks[0][key] != null) {
//               console.log(key)
//               ingredients.push(data.drinks[0][key])
//             }
//           });
//             const ingredientsStr = `Ingredients: ${ingredients.join(",  ")}`
//             document.querySelector('#ingredients').innerText = ingredientsStr
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }


  //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("#ingredient button").addEventListener('click', () => {
  let ingredient = document.querySelector("#ingredient input").value
getRandomCocktail(ingredient)

})

function getRandomCocktail(ingredient) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let randomNum = Math.floor(Math.random()*data.drinks.length)
      console.log(data.drinks[randomNum])
      document.querySelector('h2').innerText = data.drinks[randomNum].strDrink
      document.querySelector('img').src = `${data.drinks[randomNum].strDrinkThumb}/preview`
      const id = data.drinks[randomNum].idDrink
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
          document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
          let ingredients = []
          Object.keys(data.drinks[0]).forEach(key => {
            if (key.indexOf("strIngredient") >= 0 && data.drinks[0][key] != null) {
              console.log(key)
              ingredients.push(data.drinks[0][key])
            }
          });
          const ingredientsStr = `Ingredients: ${ingredients.join(",  ")}`
          document.querySelector('#ingredients').innerText = ingredientsStr
          document.querySelector('#results').style.display = 'block'
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// // get random drink by ingredient
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=bourbon`)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data)
//     console.log(data.drinks.length)
//     let randomNum = Math.random()
//     console.log(randomNum)
//     let randomDrink = Math.floor(randomNum * data.drinks.length)
//     console.log(randomDrink)
//     console.log(data.drinks[randomDrink])
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });

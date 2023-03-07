const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const app = document.querySelector("#results");
const loading = document.querySelector("#loading");

const addDrinkToDOM = (item) => {
  let div = document.createElement("div");
  div.className = "drinks";
  app.appendChild(div);

  let drink = document.createElement("div");
  drink.className = "drink";

  let image = document.createElement("img");
  image.src = item.strDrinkThumb;
  image.alt = `Non-alcoholic drink ${item.strDrink}`;
  image.className = "figure";

  let drinkname = document.createElement("h2");
  drinkname.textContent = item.strDrink;
  drinkname.className = "drinkname";

  drink.append(image, drinkname);
  div.append(drink);
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const drinks = data.drinks;
    drinks.forEach((drink) => {
      addDrinkToDOM(drink);
    });
  } catch (error) {
    console.log(error);
    const div = document.createElement("div");
    div.textContent = `An error occurred. Please try again.`;
    app.appendChild(div);
  } finally {
    app.removeChild(loading);
  }
};

fetchData(url);

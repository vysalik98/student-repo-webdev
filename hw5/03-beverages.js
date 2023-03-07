const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

$(document).ready(function () {
  const app = $("#results");
  const loading = $("#loading");

  const addDrinkToDOM = (item) => {
    let div = $("<div>").addClass("drinks");
    app.append(div);
    let drink = $("<div>").addClass("drink");
    let image = $("<img>")
      .attr("src", item.strDrinkThumb)
      .attr("alt", `Non-alcoholic drink ${item.strDrink}`)
      .addClass("figure");
    let drinkname = $("<h2>").text(item.strDrink).addClass("drinkname");
    drink.append(image, drinkname);
    div.append(drink);
  };

  const fetchData = async (url) => {
    try {
      const response = await $.ajax({ url: url });
      const data = response;
      const drinks = data.drinks;
      drinks.forEach((drink) => {
        addDrinkToDOM(drink);
      });
    } catch (error) {
      console.log(error);
      const div = $("<div>").text("An error occurred. Please try again.");
      app.append(div);
    } finally {
      loading.remove();
    }
  };

  fetchData(url);
});

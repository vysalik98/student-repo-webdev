$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  const app = $("#results");
  const loading = $("#loading");

  const addDrinkToDOM = (item) => {
    let div = $("<div>").addClass("drinks");
    app.append(div);
    let drink = $("<div>").addClass("drink");
    let image = $("<img>")
      .attr({
        src: item.strDrinkThumb,
        alt: `Non-alcoholic drink ${item.strDrink}`,
      })
      .addClass("figure");

    let drinkname = $("<h2>").text(item.strDrink).addClass("drinkname");
    drink.append(image, drinkname);
    app.find(".drinks").append(drink);
  };

  const fetchData = () => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        const drinks = data.drinks;
        drinks.forEach((drink) => {
          addDrinkToDOM(drink);
        });
      },
      error: (error) => {
        console.log(error);
        let div = $("<div>").text(`An error occurred. Please try again.`);
        app.append(div);
      },
      complete: () => {
        loading.remove();
      },
    });
  };
  fetchData(url);
});

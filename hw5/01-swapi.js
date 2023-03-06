// Data below taken from the Star Wars API: https://swapi.dev/
const starships = [
  {
    name: "CR90 corvette",
    model: "CR90 corvette",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "3500000",
    length: "150",
    max_atmosphering_speed: "950",
    crew: "30-165",
    passengers: "600",
    cargo_capacity: "3000000",
    consumables: "1 year",
    hyperdrive_rating: "2.0",
    starship_class: "corvette",
  },
  {
    name: "Star Destroyer",
    model: "Imperial I-class Star Destroyer",
    manufacturer: "Kuat Drive Yards",
    cost_in_credits: "150000000",
    length: "1,600",
    max_atmosphering_speed: "975",
    crew: "47,060",
    passengers: "n/a",
    cargo_capacity: "36000000",
    consumables: "2 years",
    hyperdrive_rating: "2.0",
    starship_class: "Star Destroyer",
  },
  {
    name: "Sentinel-class landing craft",
    model: "Sentinel-class landing craft",
    manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
    cost_in_credits: "240000",
    length: "38",
    max_atmosphering_speed: "1000",
    crew: "5",
    passengers: "75",
    cargo_capacity: "180000",
    consumables: "1 month",
    hyperdrive_rating: "1.0",
    starship_class: "landing craft",
  },
  {
    name: "Death Star",
    model: "DS-1 Orbital Battle Station",
    manufacturer:
      "Imperial Department of Military Research, Sienar Fleet Systems",
    cost_in_credits: "1000000000000",
    length: "120000",
    max_atmosphering_speed: "n/a",
    crew: "342,953",
    passengers: "843,342",
    cargo_capacity: "1000000000000",
    consumables: "3 years",
    hyperdrive_rating: "4.0",
    starship_class: "Deep Space Mobile Battlestation",
  },
  {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "100000",
    length: "34.37",
    max_atmosphering_speed: "1050",
    crew: "4",
    passengers: "6",
    cargo_capacity: "100000",
    consumables: "2 months",
    hyperdrive_rating: "0.5",
    starship_class: "Light freighter",
  },
  {
    name: "Y-wing",
    model: "BTL Y-wing",
    manufacturer: "Koensayr Manufacturing",
    cost_in_credits: "134999",
    length: "14",
    max_atmosphering_speed: "1000km",
    crew: "2",
    passengers: "0",
    cargo_capacity: "110",
    consumables: "1 week",
    hyperdrive_rating: "1.0",
    starship_class: "assault starfighter",
  },
  {
    name: "X-wing",
    model: "T-65 X-wing",
    manufacturer: "Incom Corporation",
    cost_in_credits: "149999",
    length: "12.5",
    max_atmosphering_speed: "1050",
    crew: "1",
    passengers: "0",
    cargo_capacity: "110",
    consumables: "1 week",
    hyperdrive_rating: "1.0",
    starship_class: "Starfighter",
  },
  {
    name: "TIE Advanced x1",
    model: "Twin Ion Engine Advanced x1",
    manufacturer: "Sienar Fleet Systems",
    cost_in_credits: "unknown",
    length: "9.2",
    max_atmosphering_speed: "1200",
    crew: "1",
    passengers: "0",
    cargo_capacity: "150",
    consumables: "5 days",
    hyperdrive_rating: "1.0",
    starship_class: "Starfighter",
  },
  {
    name: "Executor",
    model: "Executor-class star dreadnought",
    manufacturer: "Kuat Drive Yards, Fondor Shipyards",
    cost_in_credits: "1143350000",
    length: "19000",
    max_atmosphering_speed: "n/a",
    crew: "279,144",
    passengers: "38000",
    cargo_capacity: "250000000",
    consumables: "6 years",
    hyperdrive_rating: "2.0",
    starship_class: "Star dreadnought",
  },
  {
    name: "Rebel transport",
    model: "GR-75 medium transport",
    manufacturer: "Gallofree Yards, Inc.",
    cost_in_credits: "unknown",
    length: "90",
    max_atmosphering_speed: "650",
    crew: "6",
    passengers: "90",
    cargo_capacity: "19000000",
    consumables: "6 months",
    hyperdrive_rating: "4.0",
    starship_class: "Medium transport",
  },
];

const mapStarships = (input) => {
  // Return an array with the name, manufacturer, and cost (if not unknown) of each ship
  // Format: "Star Destroyer, manufactured by Kuat Drive Yards - cost: 150,000,000 credits"
  let mapStarships = input.map(({ name, manufacturer, cost_in_credits }) => {
    // cost_in_credits = Number(cost_in_credits);
    if (cost_in_credits === "unknown") {
      return `${name} manufactured by ${manufacturer}`;
    } else {
      return `${name} manufactured by ${manufacturer} - cost: ${Number(
        cost_in_credits
      ).toLocaleString()} credits`;
    }
  });
  return mapStarships;
};

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  let filterStarships = input.filter(
    (ships) => ships.passengers < 10 && ships.crew > 1
  );
  return filterStarships;
};

const reduceStarships = (input) => {
  // Return the cost to purchase all ships in the input array
  let reduceStarships = input.reduce((accumulator, current) => {
    const cost =
      current.cost_in_credits == "unknown"
        ? 0
        : Number(current.cost_in_credits);
    return accumulator + cost;
  }, 0);
  return `The cost of all starships is ${reduceStarships.toLocaleString()} credits`;
};

console.log(mapStarships(starships));
console.log(filterStarships(starships));
console.log(reduceStarships(starships));

import { fetchData } from "./api.js";
import { renderCards } from "./render.js";

const fetchUrl = "https://api.pokemontcg.io/v1/cards";

const getData = async () => {
  const cards = await fetchData(fetchUrl);

  renderCards(cards);
};

getData();

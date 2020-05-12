export const fetchData = async (url) => {
  const response = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "Oops something went wrong whilst fetching the data!";
      }
    })
    .catch((error) => error);

  return response.cards;
};

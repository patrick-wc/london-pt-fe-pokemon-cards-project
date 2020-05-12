export const renderCards = (cards) => {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerHTML = "";

  cards.forEach((card) => {
    const li = document.createElement("li");
    li.classList.add("card");

    li.innerHTML = `
        <figure class="card__img">
            <img src="${card.imageUrl}" alt="${card.name}">
            <figcaption class="card__img-caption">
                ${card.name}
            </figcaption>
        </figure>
        <div class="card__info">
            <p><b>Name: </b>${card.name}</p>
            <p><b>Id: </b>${card.id}</p>
            <p><b>Types: </b> ${card.types}</p>
            <p><b>Set: </b> ${card.set}</p>
        </div>
    `;

    cardsContainer.appendChild(li);
  });
};

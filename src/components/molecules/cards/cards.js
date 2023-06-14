import * as React from "react";
import style from "./cards.module.css";
import { useEffect, useState } from "react";

import axios from "axios";
import Loader from "../../atoms/loader/loader";

const Cards = ({ isGameStarted }) => {
  const [cardsData, setCardsData] = useState([]);
  const [cardsClosed, setCardsClosed] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isGameStarted) {
      setCardsClosed(
        cardsData.cards.sort(() => 0.5 - Math.random()).map((card) => card.name)
      );
    }
  }, [isGameStarted]);

  useEffect(() => {
    const url = "/tarot.json";

    axios.get(url).then((response) => {
      setCardsData(response.data);

      setIsLoading(false);
    });
  }, []);

  const handleBackCardClick = (clickedCardName) => {
    const allCards = cardsData.cards.map((card) => card.name);

    const filteredArray = allCards.filter(
      (cardName) => cardName !== clickedCardName
    );

    setCardsClosed(filteredArray);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={style.contentCards}>
      {cardsData.cards.map((card) => {
        const isCardClosed = cardsClosed.includes(card.name);

        return (
          <div
            className={`${style.cardFront} ${
              isCardClosed ? style.cardsClosed : ""
            }`}
          >
            {isCardClosed ? (
              <img
                alt=""
                onClick={() => handleBackCardClick(card.name)}
                src={`${cardsData.imageBackCard}`}
              ></img>
            ) : (
              <>
                <div className={style.nameCard}>{card.name}</div>
                <img
                  alt=""
                  className={style.imgCard}
                  src={`${cardsData.imagesUrl}${card.image}`}
                ></img>

                {isGameStarted && (
                  <div className={style.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

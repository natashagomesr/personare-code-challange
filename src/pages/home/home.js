import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '../../components/atoms/container/container';
import Loader from '../../components/atoms/loader/loader';
import Header from '../../components/molecules/header/header';
import axios from 'axios';
import style from './home.module.css';

function HomePage() {
  const [cardsData, setCardsData] = useState([]);
  const [cardsClosed, setCardsClosed] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const url = '/tarot.json';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCardsData(response.data);

      setIsLoading(false);
    });
  }, []);

  const handleInitClickButton = () => {
    setCardsClosed(cardsData.cards.sort(() => 0.5 - Math.random()).map((card) => card.name));
    setIsGameStarted(true);
  };

  const handleBackCardClick = (clickedCardName) => {
    const allCards = cardsData.cards.map((card) => card.name);

    const filteredArray = allCards.filter((cardName) => cardName !== clickedCardName);

    setCardsClosed(filteredArray);
  };

  return (
    <>
      <Header />

      <Container className={style.container}>
        <div className={style.button} onClick={handleInitClickButton}>
          {' '}
          Iniciar{' '}
        </div>
        <div className={style.contentCards}>
          {isLoading ? (
            <Loader />
          ) : (
            cardsData.cards.map((card) => (
              <div className={style.cardFront}>
                {cardsClosed.includes(card.name) ? (
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </Container>
    </>
  );
}

export default HomePage;

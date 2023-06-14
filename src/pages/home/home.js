import * as React from "react";
import { useState } from "react";
import Container from "../../components/atoms/container/container";

import Header from "../../components/molecules/header/header";
import style from "./home.module.css";
import ModalOne from "../modal/modal-one";
import ButtonStart from "../../components/molecules/header/button-start/button-start";
import Cards from "../../components/molecules/cards/cards";
import ModalTwo from "../modal/modal-two";

function HomePage() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const handleInitClickButton = () => {
    setIsGameStarted(true);
    const element = document.getElementById("cards");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />

      <div className={style.topBackground} />

      <Container className={style.container}>
        <div className={style.contentText}>
          <div className={style.text}>TAROT DO DIA</div>
          <div className={style.descriptionText}>
            O Tarot do Dia é um jogo de tarot online grátis que traz dicas para
            o seu dia. Concentre-se no seu momento e sorteie uma carta. Funciona
            assim: você joga seu tarot grátis, consulta a carta e recebe
            orientações de atitudes que pode tomar para aproveitar seu dia e o
            melhor de cada situação.
          </div>
          <img
            className={style.card}
            src="/images/cards-tarot.png"
            alt="cartas"
            height="300px"
          />

          <img
            className={style.cardResponsive}
            src="/images/card-responsive.png"
            alt="cartas"
            height="300px"
          />
          <ButtonStart
            onClick={handleInitClickButton}
            isGameStarted={isGameStarted}
          />
        </div>

        <div className={style.boxText}>
          <img
            className={style.cardBox}
            src="/images/card-box-tarot.jpeg"
            alt="cartas"
            height="300px"
          />
          <div className={style.textBox}>
            <div className={style.titleBox}>
              UM CONSELHO DE TAROT PARA O SEU DIA
            </div>
            O Tarot online te ajuda a identificar o melhor modo de agir hoje. Ao
            jogar Tarot do dia, você descobre as atitudes mais indicadas para as
            próximas 24 horas e, no final do jogo, você ainda ganha uma mensagem
            de apoio para um dia melhor, como um lema, para você refletir sobre
            qual atitude tomar diante da situação apresentada.
            <div className={style.contentButtonModal}>
              <div
                className={`${
                  showModalOne ? style["button-clicked-modal-one"] : ""
                } ${style["button-modal-one"]}`}
                onClick={() => setShowModalOne(true)}
              >
                {" "}
                O que é tarot?
              </div>
              <div
                className={`${
                  showModalTwo ? style["button-clicked-modal-two"] : ""
                } ${style["button-modal-two"]}`}
                onClick={() => setShowModalTwo(true)}
              >
                {" "}
                Para que serve tarot?
              </div>
            </div>
          </div>
        </div>

        <div id="cards" className={style.contentCards}>
          <>
            <Cards isGameStarted={isGameStarted}></Cards>

            {showModalOne && (
              <ModalOne onClose={() => setShowModalOne(false)} />
            )}
            {showModalTwo && (
              <ModalTwo onClose={() => setShowModalTwo(false)} />
            )}
          </>
        </div>
      </Container>
    </>
  );
}

export default HomePage;

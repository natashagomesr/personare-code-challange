import style from "./modal-two.module.css";

const ModalTwo = ({ onClose }) => {
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <div onClick={onClose} className={style.button}>
            X
          </div>
        </div>
        <div className={style.modalBody}>
          <div className={style.titleModalTarot}>PARA QUE SERVE O TAROT? </div>
          <div className={style.contentTextTarot}>
            Tendo em mente a ideia de que o Tarot e é um conjunto de símbolos, é
            fácil perceber que ele funciona, basicamente, como a representação
            de situações ou pessoas. Na intenção de previsão, o Tarot online
            serve para prever o futuro, analisar acontecimentos passados e
            avaliar o que está em jogo no presente, mas sempre dependendo do
            contexto em que for utilizado. Já com a intenção de orientação, as
            cartas de Tarot associam-se a estágios em que nós nos encontramos em
            certo momento e mostram como podemos resolver problemas, tomar as
            atitudes certas e aproveitar o que é importante.
          </div>
          <div className={style.titleModalTarotDay}>E O TAROT DO DIA?</div>
          <div className={style.contentTextTarotDay}>
            O Tarot do Dia é um jogo de tarot grátis que traz o enfoque de
            orientação. Aqui, as cartas online indicam atitudes e posturas que
            você pode tomar para viver o seu dia de forma mais consciente e
            proveitosa.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTwo;

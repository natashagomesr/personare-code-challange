import style from "./modal-one.module.css";

const ModalOne = ({ onClose }) => {
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <div onClick={onClose} className={style.button}>
            X
          </div>
        </div>
        <div className={style.modalBody}>
          <div className={style.titleModalTarot}>O QUE É TAROT? </div>
          <div className={style.contentTextTarot}>
            O Tarot online (assim como o Tarot de papel) é um conjunto de 78
            cartas chamadas comumente de arcanos (arcano = mistério, segredo),
            que estão divididas em dois grupos: os 22 Arcanos Maiores e os 56
            Arcanos Menores.
          </div>
          <div className={style.titleModalArcanos}>OS ARCANOS MAIORES</div>
          <div className={style.contentTextArcanosMax}>
            Os Arcanos Maiores são 22 Cartas de Tarot com imagens arquetípicas
            da sociedade e do imaginário medieval como O Imperador, O Papa e A
            Roda da Fortuna, por exemplo, que exprimem ideias, forças e grandes
            possibilidades que a vida oferece.
          </div>
          <div className={style.titleModalArcanosMin}>OS ARCANOS MENORES</div>
          <div className={style.contentTextArcanosMin}>
            Já os Arcanos Menores são as formas que complementam os Maiores,
            sendo 56 cartas de Tarot que se distribuem em quatro naipes ou
            reinos bastante conhecidos: o de Ouros, o de Espadas, o de Copas e o
            de Paus.
          </div>
          <div className={style.titleModalLearnTarot}>
            APRENDA MAIS SOBRE TAROT
          </div>
          <div className={style.contentTextLearnTarot}>
            Para saber mais sobre o Tarot, participe da Jornada de Tarot Online
            Personare e receba conteúdos gratuitos sobre a origem,
            funcionalidade e significados das cartas de Tarot diretamente no seu
            e-mail. Inscreva-se gratuitamente aqui.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;

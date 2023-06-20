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
          <div className={style.titleModalCartas}>O QUE É CARTAS? </div>
          <div className={style.contentTextCartas}>
            O Cartas online (assim como o Cartas de papel) é um conjunto de 78
            cartas chamadas comumente de arcanos (arcano = mistério, segredo),
            que estão divididas em dois grupos: os 22 Arcanos Maiores e os 56
            Arcanos Menores.
          </div>
          <div className={style.titleModalArcanos}>OS ARCANOS MAIORES</div>
          <div className={style.contentTextArcanosMax}>
            Os Arcanos Maiores são 22 Cartas de Cartas com imagens arquetípicas
            da sociedade e do imaginário medieval como O Imperador, O Papa e A
            Roda da Fortuna, por exemplo, que exprimem ideias, forças e grandes
            possibilidades que a vida oferece.
          </div>
          <div className={style.titleModalArcanosMin}>OS ARCANOS MENORES</div>
          <div className={style.contentTextArcanosMin}>
            Já os Arcanos Menores são as formas que complementam os Maiores,
            sendo 56 cartas de Cartas que se distribuem em quatro naipes ou
            reinos bastante conhecidos: o de Ouros, o de Espadas, o de Copas e o
            de Paus.
          </div>
          <div className={style.titleModalLearnCartas}>
            APRENDA MAIS SOBRE CARTAS
          </div>
          <div className={style.contentTextLearnCartas}>
            Para saber mais sobre o Cartas, participe da Jornada de Cartas
            Online Personare e receba conteúdos gratuitos sobre a origem,
            funcionalidade e significados das cartas de Cartas diretamente no
            seu e-mail. Inscreva-se gratuitamente aqui.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;

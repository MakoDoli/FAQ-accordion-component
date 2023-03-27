export function AccordionSingle(props) {
  return (
    <div>
      <div className="title-question">
        <div>
          <h2 onClick={(e) => props.handler(props.singleNumber, e)}>
            {props.title}
          </h2>
        </div>
        <div>
          <img
            className="arrow"
            src={props.arrow}
            alt=""
            onClick={(e) => props.handler(props.singleNumber, e)}
          ></img>
        </div>
      </div>
      {props.activeQuestionNum === props.singleNumber ? (
        <p className="mobile-text">{props.text}</p>
      ) : null}
    </div>
  );
}

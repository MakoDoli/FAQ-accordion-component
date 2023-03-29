export function AccordionSingle(props) {
  return (
    <div>
      <div className="title-question">
        <div>
          <h2
            className={
              props.activeQuestionNum === props.singleNumber ? "active" : ""
            }
            onClick={(e) => props.handler(props.singleNumber)}
          >
            {props.title}
          </h2>
        </div>
        <div>
          <img
            className={
              props.activeQuestionNum === props.singleNumber
                ? "arrow rotate"
                : "arrow"
            }
            src={props.arrow}
            alt=""
            onClick={(e) => props.handler(props.singleNumber)}
          ></img>
        </div>
      </div>
      {props.activeQuestionNum === props.singleNumber ? (
        <p className="mobile-text">{props.text}</p>
      ) : null}
      <hr></hr>
    </div>
  );
}

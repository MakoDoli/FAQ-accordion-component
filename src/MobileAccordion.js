import woman from "./images/illustration-woman-online-mobile.svg";
import bigWoman from "./images/illustration-woman-online-desktop.svg";
import cube from "./images/illustration-box-desktop.svg";
import arrow from "./images/icon-arrow-down.svg";
import { useState } from "react";
import { AccordionSingle } from "./AccordionSingle";
import { data } from "./Data";

export function MobileAccordion() {
  const [activeQuestionNum, setActiveQuestionNum] = useState(null);

  function checkNum(num) {
    activeQuestionNum === num
      ? setActiveQuestionNum(null)
      : setActiveQuestionNum(num);
  }

  return (
    <div className="maincontainer">
      <div className="image-box">
        <img className="mob-woman-image" src={woman} alt=""></img>
        <img className="big-woman-image" src={bigWoman} alt=""></img>
        <img className="cube" alt="" src={cube}></img>
      </div>
      <div className="faq-box">
        <h1>FAQ</h1>
        <div className="questions-answers">
          {data.map((elem) => (
            <AccordionSingle
              singleNumber={elem.singleNumber}
              activeQuestionNum={activeQuestionNum}
              handler={checkNum}
              title={elem.title}
              text={elem.text}
              arrow={arrow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

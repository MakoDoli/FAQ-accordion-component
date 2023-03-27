import woman from "./images/illustration-woman-online-mobile.svg";
import bigWoman from "./images/illustration-woman-online-desktop.svg";
import cube from "./images/illustration-box-desktop.svg";
import arrow from "./images/icon-arrow-down.svg";
import { useState } from "react";
import { AccordionSingle } from "./AccordionSingle";

export function MobileAccordion() {
  const [activeQuestionNum, setActiveQuestionNum] = useState(null);
  const [rotate, setRotate] = useState(1);

  function checkNum(num, e) {
    rotate > 0 ? setRotate(rotate - 1) : setRotate(rotate + 1);

    const questions = Array.from(document.querySelectorAll("h2"));

    questions.forEach((elem) => {
      elem.style.fontWeight = 400;
      e.target.style.fontWeight = 700;
    });

    const parentElement = e.target.parentElement;
    console.log(e.target.parentElement);
    if (parentElement.parentElement.children[1].children[0]) {
      parentElement.parentElement.children[1].children[0].style.transform = `rotate(${
        rotate * 180
      }deg)`;
    }

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
          <div className="title-question" questionNumber="1">
            <div>
              <h2 onClick={(e) => checkNum(1, e)}>
                How many team members can I invite?
              </h2>
            </div>
            <div>
              <img
                className="arrow"
                src={arrow}
                alt=""
                onClick={(e) => checkNum(1, e)}
              ></img>
            </div>
          </div>
          {activeQuestionNum === 1 ? (
            <p className="mobile-text">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          ) : null}
          <hr></hr>
          <AccordionSingle
            singleNumber={2}
            activeQuestionNum={activeQuestionNum}
            handler={checkNum}
            title="What is the maximum file upload size?"
            text="No more than 2GB. All files in your account must fit your allotted storage space."
            arrow={arrow}
          />
          <hr></hr>
          <AccordionSingle
            singleNumber={3}
            activeQuestionNum={activeQuestionNum}
            handler={checkNum}
            title="How do I reset my password?"
            text="Click “Forgot password” from the login page or “Change password” from your profile page.
          A reset link will be emailed to you."
            arrow={arrow}
          />
          <hr></hr>
          <AccordionSingle
            singleNumber={4}
            activeQuestionNum={activeQuestionNum}
            handler={checkNum}
            title="Can I cancel my subscription?"
            text="Yes! Send us a message and we’ll process your request no questions asked."
            arrow={arrow}
          />
          <hr></hr>
          <AccordionSingle
            singleNumber={5}
            activeQuestionNum={activeQuestionNum}
            handler={checkNum}
            title="Do you provide additional support?"
            text="Chat and email support is available 24/7. Phone lines are open during normal business hours."
            arrow={arrow}
          />
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

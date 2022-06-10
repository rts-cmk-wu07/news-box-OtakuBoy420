/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import { FaTrash } from "react-icons/fa";
const Message = (props) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const colors = useContext(themeContext);
  const styles = {
    message: css`
      margin-block: 1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e0e1e2;
      overflow: hidden;
      & div {
        margin-top: 7px;
      }
      img {
        width: 70px;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
      & h2 {
        color: ${colors.Drab};
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 2px;
      }
      & p {
        color: ${colors.Slate};
        font-size: 14px;
      }
      .deleteBtn {
        width: 100px;
        height: 100px;
        background-color: ${colors.Danger};
        display: none;
      }
    `,
  };
  const onTouchEnd = (event) => {
    const swipeLeftAnimation = [{ transform: "translateX(0px)" }, { transform: "translateX(-100px)" }];
    const swipeTiming = {
      duration: 250,
      iterations: 1,
    };
    const swipeRightAnimation = [{ transform: "translateX(-100px)" }, { transform: "translateX(0px)" }];

    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    console.log("swipe", isLeftSwipe ? "left" : "right");
    const closestArticle = event.target.closest("article");
    if (isLeftSwipe) {
      closestArticle.animate(swipeLeftAnimation, swipeTiming);
      closestArticle.classList.add("swiped");
    }
    if (isRightSwipe) {
      closestArticle.animate(swipeRightAnimation, swipeTiming);
      closestArticle.classList.remove("swiped");
    } 
  };
  return (
    <article css={styles.message} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <img src="./img/message_img.png" alt="img" />
      <div className="message__textContainer">
        <h2>{props.name}</h2>
        <p>{props.message}</p>
      </div>
      <div className="deleteBtn"></div>
    </article>
  );
};

export default Message;

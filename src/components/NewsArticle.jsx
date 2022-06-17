/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import Icon from "./Icon";
import DarkmodeContext from "../context/DarkmodeContext";
const Message = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
  const colors = useContext(themeContext);
  const styles = {
    message: css`
      padding-block: 1rem;
      display: flex;
      justify-content: space-between;
      background-color: white;
      & div {
        margin-top: 7px;
      }
      img {
        width: 70px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: 50%;
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
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -15.2px;
        right: 0;
      }
    `,
    swipecontainer: css`
      display: flex;
      background-color: ${colors.Slate};
      align-items: center;
      justify-content: center;
    `,
  };
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("din far")}>
        <div className="swipeContainer" css={styles.swipecontainer}>
          <Icon iconName="FaInbox" size="20px" color={colors.Snow} />
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem trailingActions={trailingActions()}>
        <article css={styles.message} className={`${isDarkMode ? "dark" : ""}`}>
          <img src={props.img} alt="img" />
          <div className="message__textContainer">
            <h2 className={`${isDarkMode ? "white" : ""}`}>{props.name}</h2>
            <p>{props.message}</p>
          </div>
        </article>
        <hr />
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Message;

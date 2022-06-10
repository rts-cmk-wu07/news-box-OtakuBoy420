/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import SwipeToDelete from "react-swipe-to-delete-component";
import "react-swipe-to-delete-component/dist/swipe-to-delete.css";
const Message = (props) => {
  const colors = useContext(themeContext);
  const styles = {
    message: css`
      padding-block: 1rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e0e1e2;
      background-color: white;
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
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;

        top: -15.2px;
        right: 0;
      }
    `,
  };
  return (
    <SwipeToDelete>
      <article css={styles.message}>
        <img src="./img/message_img.png" alt="img" />
        <div className="message__textContainer">
          <h2>{props.name}</h2>
          <p>{props.message}</p>
        </div>
      </article>
    </SwipeToDelete>
  );
};

export default Message;

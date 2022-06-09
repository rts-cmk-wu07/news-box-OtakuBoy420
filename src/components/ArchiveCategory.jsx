/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import themeContext from "../context/themeContext";
import { FiChevronDown } from "react-icons/fi";

const ArchiveCategory = (props) => {
  const colors = useContext(themeContext);
  const styles = {
    archivecategory: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      & img {
        width: 35px;
        border-radius: 50px;
        background-color: white;
        padding: 0.4rem;
        box-shadow: 0px 5px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
      }
      & div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        & h2 {
          text-transform: uppercase;
          color: ${colors.Drab};
          text-align: center;
          font-size: 15px;
          font-weight: bold;
        }
      }
    `,
  };
  return (
    <article css={styles.archivecategory}>
      <div>
        <img src="./img/orangeicon.svg" alt="img" />
        <h2>{props.categoryTitle}</h2>
      </div>
      <FiChevronDown size="26px" color={colors.Drab} />
    </article>
  );
};

export default ArchiveCategory;

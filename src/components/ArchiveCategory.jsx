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
      border-bottom: 1px solid #e0e1e2;
      & img {
        width: 35px;
        border-radius: 50px;
        background-color: white;
        padding: 0.4rem;
        box-shadow: 1px 3px 10px -8px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
      }
      & div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
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
      <button>
        <FiChevronDown size="26px" color={colors.Drab} />
      </button>
    </article>
  );
};

export default ArchiveCategory;

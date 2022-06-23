/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Header";
import SearchField from "./SearchField";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import ArchiveCategory from "./ArchiveCategory";
import NewsArticle from "./NewsArticle";
import DarkmodeContext from "../context/DarkmodeContext";
import "react-swipeable-list/dist/styles.css";
import useFetch from "../useFetch";
import CategoryContext from "../context/CategoryContext";

const Newsbox = () => {
  const [showNewsSportContent, setShowNewsSportContent] = useState(false);
  const [showHealthContent, setShowHealthContent] = useState(false);
  const [showNewsTravelContent, setShowNewsTravelContent] = useState(false);
  const colors = useContext(themeContext);
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
  const {
    data: travelData,
    error: travelError,
    isPending: travelIsPending, 
  } = useFetch("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Hdr2pqi2Q8HIdqp1KhDZFdNtVRMwf11a");
  const { categories } = useContext(CategoryContext);
  console.log(categories);
  let categoriesKeys = [];
  categories.map((category) => {
    categoriesKeys.push(Object.keys(category));
  });

  let selectedCategories = [];
  categories.map((category, i) => {
    category[categoriesKeys[i][0]] && selectedCategories.push(Object.keys(category));
  });
  return (
    <>
      <Header
        title="Newsbox"
        iconLeft="FaInbox"
        iconLeftSize="20px"
        iconLeftColor={!isDarkMode ? colors.Drab : "white"}
        iconRight="FaCog"
        iconRightColor={!isDarkMode ? colors.Drab : "white"}
        iconRightSize="20px"
      />

      <SearchField />
      <section>
        <div onClick={() => setShowNewsTravelContent(!showNewsTravelContent)}>
          <ArchiveCategory categoryTitle="din far" icon={showNewsTravelContent ? "FaChevronDown" : "FaChevronLeft"} />
        </div>
        {!travelIsPending &&
          showNewsTravelContent &&
          travelData.results.map((data, index) => (
            <NewsArticle
              name={data.multimedia !== null ? data.title : "Article not found"}
              img={data.multimedia !== null ? data.multimedia[2].url : "https://picsum.photos/200/200"}
              key={index}
            ></NewsArticle>
          ))}
        <div>
          {selectedCategories &&
            selectedCategories.map((category) => {
              return (
                <div key={category}>
                  <ArchiveCategory categoryTitle={category} key={category} icon="FaChevronDown" />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Newsbox;

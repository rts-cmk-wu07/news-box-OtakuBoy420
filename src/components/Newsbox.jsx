/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "./Header";
import SearchField from "./SearchField";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import ArchiveCategory from "./ArchiveCategory";
import Message from "./Message";
import NewsArticle from "./NewsArticle";
import DarkmodeContext from "../context/DarkmodeContext";
import "react-swipeable-list/dist/styles.css";
import useFetch from "../useFetch";

const Newsbox = () => {
  const { data, error, isPending } = useFetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=Hdr2pqi2Q8HIdqp1KhDZFdNtVRMwf11a");
  if (!isPending) console.log(data.results);
  const [showNewsSportContent, setShowNewsSportContent] = useState(false);
  const [showHealthContent, setShowHealthContent] = useState(false);
  const [showNewsTravelContent, setShowNewsTravelContent] = useState(false);
  const colors = useContext(themeContext);
  const { isDarkMode, setIsDarkMode } = useContext(DarkmodeContext);
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
        <div onClick={() => setShowHealthContent(!showHealthContent)}>
          <ArchiveCategory categoryTitle="health" icon={showHealthContent ? "FaChevronDown" : "FaChevronLeft"} />
        </div>

        {!isPending &&
          showHealthContent &&
          data.results.map((data, index) => (
            <NewsArticle
              name={data !== null ? data.title : "Article not found"}
              img={data.multimedia !== null ? data.multimedia[2].url : "https://picsum.photos/200/200"}
              key={index}
            ></NewsArticle>
          ))}

        <div onClick={() => setShowNewsSportContent(!showNewsSportContent)}>
          <ArchiveCategory categoryTitle="sport" icon={showNewsSportContent ? "FaChevronDown" : "FaChevronLeft"} />
        </div>
        <div onClick={() => setShowNewsTravelContent(!showNewsTravelContent)}>
          <ArchiveCategory categoryTitle="travel" icon={showNewsTravelContent ? "FaChevronDown" : "FaChevronLeft"} />
        </div>
        {showNewsTravelContent && (
          <div>
            <NewsArticle
              name="Kate Austen"
              message="Hey Cody, you should definitely check 
         out Yoga Six for hot yoga! They have…"
              img="./img/image_21.png"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Newsbox;

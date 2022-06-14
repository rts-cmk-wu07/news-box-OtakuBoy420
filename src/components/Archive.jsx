import ArchiveCategory from "./ArchiveCategory";
import Header from "./Header";
import Message from "./Message";
import { useContext, useState } from "react";
import themeContext from "../context/themeContext";
import SearchField from "./SearchField";

const Archive = () => {
  const [showSportContent, setShowSportContent] = useState(false);
  const [showTravelContent, setShowTravelContent] = useState(false);
  console.log(showSportContent);
  const colors = useContext(themeContext);
  return (
    <>
      <Header
        title="Archive"
        iconLeft="FaChevronLeft"
        iconLeftSize="20px"
        iconLeftColor={colors.Drab}
        iconRight="FaCog"
        iconRightColor={colors.Drab}
        iconRightSize="20px"
      />
      <SearchField />
      <section>
        <div onClick={() => setShowSportContent(!showSportContent)}>
          <ArchiveCategory categoryTitle="sport" />
        </div>
        {showSportContent && (
          <Message
            name="Kate Austen"
            message="Hey Cody, you should definitely check 
        out Yoga Six for hot yoga! They have…"
            img="./img/message_img.png"
          />
        )}
        <div onClick={() => setShowTravelContent(!showTravelContent)}>
          <ArchiveCategory categoryTitle="travel" />
        </div>
        {showTravelContent && (
          <div>
            <Message
              name="Kate Austen"
              message="Hey Cody, you should definitely check 
         out Yoga Six for hot yoga! They have…"
              img="./img/message_img.png"
            />
            <Message
              name="Kate Austen"
              message="Hey Cody, you should definitely check 
         out Yoga Six for hot yoga! They have…"
              img="./img/message_img.png"
            />
            <Message
              name="Kate Austen"
              message="Hey Cody, you should definitely check 
         out Yoga Six for hot yoga! They have…"
              img="./img/message_img.png"
            />
            <Message
              name="Kate Austen"
              message="Hey Cody, you should definitely check 
         out Yoga Six for hot yoga! They have…"
              img="./img/message_img.png"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Archive;

// import { useEffect, useState } from "react";
import Story from "./story";

export default function Stories({ stories, isHighlights = false }) {
  //   const [allHighlights, setHighlights] = useState([]);
  //   useEffect(() => {
  //     setHighlights(highlights);
  //   }, []);
  return (
    <div
      className={"stories stories-feed" + (isHighlights ? "highlights" : "")}
    >
      {stories?.map((story) => {
        return (
          <Story key={story.id} story={story} isHighlights={isHighlights} />
        );
      })}
    </div>
  );
}

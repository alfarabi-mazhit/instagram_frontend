export default function Story({ story, isHighlights }) {
  return (
    <div
      className={"story " + (isHighlights ? "highlight" : "")}
      key={story.id}
    >
      <img
        className={true ? "new" : ""}
        src={story.mediaUrl || "/images/profile-photo-example.jpg"}
        alt=""
      />
      <div className="text">{story.text || "Text"}</div>
    </div>
  );
}

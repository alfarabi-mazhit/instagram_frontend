import Suggestion from "./suggestion";

export default function Suggestions({ items }) {
  return (
    <div className="suggestions">
      <div className="flex flex-jc-sb flex-ai-c mb4">
        <span>Suggestions For You</span>
        <a>
          <b>See all</b>
        </a>
      </div>
      {items?.map((item, index) => (
        <Suggestion key={index} item={item} />
      ))}
    </div>
  );
}

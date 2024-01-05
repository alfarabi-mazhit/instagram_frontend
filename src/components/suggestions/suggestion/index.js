export default function Suggestion({ item }) {
  return (
    <div className={"suggested-item"}>
      <div className="story story-42px">
        <img src="/images/profile-photo-example.jpg" alt="" />
      </div>
      <div className="suggested-item-info">
        <h5>{item?.username || "alfarabi_mazhit"}</h5>
        <p>Followed by terylucas + 2 more</p>
      </div>
      <div className="button button-bordered bordered-3 p0">Follow</div>
    </div>
  );
}

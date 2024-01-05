export default function CommentWithType({
  type,
  userImgUrl,
  userName,
  userText,
  interact,
  openModal,
  className,
}) {
  if (!type) return;
  else if (type === "header")
    return (
      <div className="modal-comment-item">
        <div className="story">
          <img src={userImgUrl} alt="" />
        </div>
        <div className="modal-comment-item-info">
          <h4>{userName}</h4>
          <p>{userText}</p>
        </div>
        <div className="kebab-menu">
          <img src="/images/icons/kebab-menu-icon.svg" alt="" />
        </div>
      </div>
    );
  else if (type === "header-2")
    return (
      <div className="flex flex-jc-sb flex-ai-c">
        <div className="story story-42px">
          <img src={userImgUrl} alt="" />
        </div>
        <div className="w100 p2">
          <h5>{userName}</h5>
        </div>
        <div className="kebab-menu">
          <img src="/images/icons/kebab-menu-icon.svg" alt="" />
        </div>
      </div>
    );
  else if (type === "caption")
    return (
      <div className={"modal-comment-item " + className}>
        {userImgUrl && (
          <div className="story">
            <img src={userImgUrl} alt="" />
          </div>
        )}
        <div className="modal-comment-item-info">
          <p>
            <b>{userName}</b> {userText}
          </p>
          <div className={"modal-comment-item-interactions "+ (openModal ? "flex-d-cl":"")}>
            {openModal && <a className="mtb2 " onClick={openModal}>View comments</a>}
            <span>{interact}</span>
          </div>
        </div>
        <div className="icon like-icon"></div>
      </div>
    );
}

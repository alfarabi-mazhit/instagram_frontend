import NotLikeSVG from "@/../public/images/icons/not-like-heart-icon.svg";
import LikeSVG from "@/../public/images/icons/like-heart-icon.svg";
import { useEffect, useState } from "react";

export default function Comment({ comment, id, toggleLike }) {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    setIsLiked(comment?.isLiked);
  }, []);
  console.log(`rerender-${id}`);

  return (
    <div className="modal-comment-item" key={0}>
      <div className="story">
        <img src={comment?.user?.photoUrl} alt="" />
      </div>
      <div className="modal-comment-item-info">
        <p>
          <b>{comment?.user?.username}</b>
          {comment?.text}
        </p>
        <div className="modal-comment-item-interactions">
          <span>{comment?.createdAt}</span>
          <span>Нравится: {comment?.likesCount}</span>
          <span>Ответить</span>
        </div>
      </div>
      {isLiked && (
        <LikeSVG
          className="icon like-icon"
          onClick={() => {
            toggleLike(id);
            setIsLiked(!isLiked);
          }}
        />
      )}
      {!isLiked && (
        <NotLikeSVG
          className="icon like-icon"
          onClick={() => {
            toggleLike(id);
            setIsLiked(!isLiked);
          }}
        />
      )}
    </div>
  );
}

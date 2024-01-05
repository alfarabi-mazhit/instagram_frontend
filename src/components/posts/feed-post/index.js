import CommentWithType from "@/components/comments/comment-with-type";
import NotLikeSVG from "@/../public/images/icons/not-like-heart-icon.svg";
import SaveSVG from "@/../public/images/icons/save-icon.svg";
import ShareSVG from "@/../public/images/icons/share-icon.svg";
import CommentSVG from "@/../public/images/icons/comment-icon.svg";
import EmojiSVG from "@/../public/images/icons/emoji-icon.svg";

export default function FeedPost({ post, openModal }) {
  return (
    post && (
      <div
        key={post.id}
        className="feed-post"
        // onClick={() => open(post.id)}
      >
        <div className="post-info-header">
          <CommentWithType
            type={"header-2"}
            userImgUrl={"/images/profile-photo-example.jpg"}
            userName={"alfarabi_mazhit"}
            userText={""}
          />
        </div>
        <img
          className=""
          src={post.mediaUrl || "/images/profile-photo-example.jpg"}
          alt=""
        />
        <div className="post-interactions p2 plr16px">
          <div>
            <NotLikeSVG className="icon standart-icon" />
            <CommentSVG className="icon standart-icon" />
            <ShareSVG className="icon standart-icon" />
          </div>
          <div>
            <SaveSVG className="icon standart-icon" />
          </div>
        </div>
        <div className="p1 plr16px">
          <b className="flex mtb2">87 likes</b>
          <CommentWithType
            type={"caption"}
            userName={"alfarabi_mazhit"}
            userText={` aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `}
            interact={"YESTERDAY"}
            openModal={() => openModal(post.id)}
          />
        </div>
        <div className="add-comment plr16px">
          <div>
            <EmojiSVG className="icon standart-icon" />
            <textarea
              className="comment"
              placeholder="Добавьте комментарий..."
              name="comment"
            ></textarea>
          </div>
          <button className="button button-bordered bordered-3">
            Опубликовать
          </button>
        </div>
      </div>
    )
  );
}

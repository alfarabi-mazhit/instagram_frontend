import CloseSVG from "@/../public/images/icons/close-modal-icon.svg";
import BtnSVG from "@/../public/images/icons/left-arrow.svg";
import NotLikeSVG from "@/../public/images/icons/not-like-heart-icon.svg";
import SaveSVG from "@/../public/images/icons/save-icon.svg";
import ShareSVG from "@/../public/images/icons/share-icon.svg";
import CommentSVG from "@/../public/images/icons/comment-icon.svg";
import EmojiSVG from "@/../public/images/icons/emoji-icon.svg";
import Comments from "../comments";
import CommentWithType from "../comments/comment-with-type";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ModalPost({ close, params, posts = [], returnPath }) {
  // const [parames, setParames] = useState(params);
  const router = useRouter();
  const [postId, setPostId] = useState(params.postId);
  const [postIndex, setPostIndex] = useState(params.postIndex);
  const [post, setPost] = useState(
    posts.length > 1 ? posts[params.postIndex] : posts[0]
  );

  useEffect(() => {
    // router.replace("/p/" + postId);
    window.history.replaceState(null, "", "/p/" + postId);
    return () => {
      // router.replace(previousPath);
      window.history.replaceState(null, "", returnPath);
    };
  }, [post]);

  const handlePress = (inc) => {
    if (postIndex + inc < 0 || posts.length <= postIndex + inc) return;
    setPost(posts[postIndex + inc]);
    setPostId(posts[postIndex + inc].id);
    setPostIndex(postIndex + inc);
  };

  return (
    <div className="modal post">
      <div className="modal-backdrop" onClick={close}>
        <div className="close-modal" onClick={close}>
          <CloseSVG stroke="white" width="18" height="18" viewBox="0 0 18 18" />
        </div>
      </div>
      <div className="modal-container">
        {posts && postIndex - 1 >= 0 ? (
          <BtnSVG className="modal-button" onClick={() => handlePress(-1)} />
        ) : (
          <div className="modal-button-placeholder"></div>
        )}
        <div className="modal-inner flex flex-d-r">
          <div className="modal-post-media"></div>
          <div className="modal-post-info">
            <div className="post-info-header">
              <CommentWithType
                type={"header"}
                userImgUrl={"/images/profile-photo-example.jpg"}
                userName={
                  "alfarabi_mazhit " +
                  Array(JSON.stringify(post), postId, postIndex).join(" ")
                }
                userText={"КазНУ"}
              />
            </div>
            <div className="scroll">
              <CommentWithType
                type={"caption"}
                userImgUrl={"/images/profile-photo-example.jpg"}
                userName={"alfarabi_mazhit"}
                userText={`
              aaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `}
                interact={"6 hours ago"}
                className={"small-container"}
              />
              <Comments />
            </div>
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
              <b>87 likes</b>
              <p className="modal-created-at">yesterday</p>
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
        </div>
        {posts && postIndex + 1 < posts.length ? (
          <BtnSVG
            className="modal-button rotate180"
            onClick={() => handlePress(1)}
          />
        ) : (
          <div className="modal-button-placeholder"></div>
        )}
      </div>
    </div>
  );
}

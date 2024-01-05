"use client";
import { useEffect, useState } from "react";
import NavigationHeader from "@/components/global/navigation-header";
import Footer from "@/components/global/footer";
import Posts from "@/components/posts";
import NotLikeSVG from "@/../public/images/icons/not-like-heart-icon.svg";
import SaveSVG from "@/../public/images/icons/save-icon.svg";
import ShareSVG from "@/../public/images/icons/share-icon.svg";
import CommentSVG from "@/../public/images/icons/comment-icon.svg";
import EmojiSVG from "@/../public/images/icons/emoji-icon.svg";
import Comments from "@/components/comments";
import CommentWithType from "@/components/comments/comment-with-type";
import { useRouter } from "next/navigation";

export default function PostPage() {
  const router = useRouter();
  return (
    <main className="has-nav">
      <NavigationHeader />
      <section className="standard-body">
        <div className="post modal-inner flex flex-d-r">
          <div className="modal-post-media"></div>
          <div className="modal-post-info">
            <div className="post-info-header">
              <CommentWithType
                type={"header"}
                userImgUrl={"/images/profile-photo-example.jpg"}
                userName={"alfarabi_mazhit"}
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
                interact={"6 часов назад"}
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
              <b>87 отметок "Нравится"</b>
              <p className="modal-created-at">вчера</p>
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
        <Posts
          posts={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          openPage={(id) => {
            router.push("/p/" + id);
          }}
          type="grid"
        />
      </section>
      <Footer />
    </main>
  );
}

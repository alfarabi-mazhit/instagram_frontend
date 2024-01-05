"use client";
import { useEffect, useState } from "react";
import NavigationHeader from "@/components/global/navigation-header";
import Footer from "@/components/global/footer";
import {
  PostsSelectorSvg,
  SavedSelectorSvg,
  TaggedSelectorSvg,
} from "./selector-svgs";
import ModalInfo from "@/components/modals/info-modal";
import ModalPost from "@/components/modals/post-modal";
import Stories from "@/components/stories";
import Posts from "@/components/posts";

export default function UserPage() {
  const [isModalPostOpen, setIsModalPostOpen] = useState(false);
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [selector, setSelector] = useState("posts");
  const [params, setParams] = useState();
  const [posts, SetPosts] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const openModal = (name, params) => {
    if (name === "post") {
      setIsModalPostOpen(true);
    } else if (name === "info") {
      setIsModalInfoOpen(true);
    } else return;
    setParams(params);
  };

  const closeModal = (name) => {
    if (name === "post") setIsModalPostOpen(false);
    else if (name === "info") setIsModalInfoOpen(false);
    else return;
  };

  useEffect(() => {
    const handleBodyClass = () => {
      if (document.body) {
        document.body.classList.toggle(
          "fixed-body",
          isModalPostOpen || isModalInfoOpen
        );
      }
    };
    handleBodyClass();
    return () => {
      handleBodyClass();
    };
  }, [isModalPostOpen, isModalInfoOpen]);

  return (
    <main className="has-nav">
      <NavigationHeader />
      <section className="standard-body">
        <div className="body-header">
          <div className="profile-photo stories-circle">
            <img src="/images/profile-photo-example.jpg" alt="" />
          </div>
          <div className="profile-description">
            <div className="profile-description-header">
              <div className="username">alfarabi_mazhit</div>
              {/* if(req.user.id !== user.id) */}
              <button className="button button-bordered">Follow</button>
              <div id="kebab-menu">
                <img src="/images/icons/kebab-menu-icon.svg" alt="" />
              </div>
            </div>
            <div className="profile-activity">
              <div>
                <div className="profile-numbers">1</div> <a>posts</a>
              </div>
              <div>
                <div className="profile-numbers">245</div>{" "}
                <a
                  onClick={() =>
                    openModal("info", {
                      header: "Followers",
                      items: [{}, {}, {}, {}, {}],
                    })
                  }
                >
                  followers
                </a>
              </div>
              <div>
                <div className="profile-numbers">322</div>{" "}
                <a
                  onClick={() =>
                    openModal("info", {
                      header: "Following",
                      items: [{}, {}, {}, {}, {}],
                    })
                  }
                >
                  following
                </a>
              </div>
            </div>
            <div className="profile-name">Alfarabi Mazhit</div>
            <div className="profile-about">
              AKX🏙️ {"->"} ALA🌆 <br />
              Major IT (2023), KazNU 🎓
              <br />
              Master IT (—2025), KBTU 🎓
            </div>
          </div>
        </div>
        <Stories stories={[{ id: 1 }, { id: 2 }, { id: 3 }]} isHighlights />
        <div id="user-profile-navigation">
          <div
            className={"selector " + (selector === "posts" ? "selected" : "")}
            onClick={() => setSelector("posts")}
          >
            <PostsSelectorSvg />
            Posts
          </div>
          <div
            className={"selector " + (selector === "saved" ? "selected" : "")}
            onClick={() => setSelector("saved")}
          >
            <SavedSelectorSvg />
            Saved
          </div>
          <div
            className={"selector " + (selector === "tagged" ? "selected" : "")}
            onClick={() => setSelector("tagged")}
          >
            <TaggedSelectorSvg />
            Tagged
          </div>
        </div>
        <Posts
          posts={posts}
          openModal={(id, index) =>
            openModal("post", { postId: id, postIndex: index })
          }
          type="grid"
        />
      </section>
      <Footer />
      {isModalInfoOpen && (
        <ModalInfo params={params} close={() => closeModal("info")} />
      )}
      {isModalPostOpen && (
        <ModalPost
          posts={posts}
          params={params}
          returnPath={"/1"} //username
          close={() => closeModal("post")}
        />
      )}
    </main>
  );
}

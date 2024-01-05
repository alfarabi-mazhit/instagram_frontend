import NavigationHeader from "@/components/global/navigation-header";
import Footer from "@/components/global/footer";
import Stories from "../stories";
import Posts from "../posts";
import { useState, useEffect } from "react";
import ModalPost from "../modals/post-modal";
import Suggestions from "../suggestions";

export default function Feed() {
  const [isModalPostOpen, setIsModalPostOpen] = useState(false);
  const [params, setParams] = useState();
  const [posts, SetPosts] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const openModal = (name, params) => {
    if (name === "post") setIsModalPostOpen(true);
    // else if (name === "info") setIsModalInfoOpen(true);
    else return;
    setParams(params);
  };
  const closeModal = (name) => {
    if (name === "post") setIsModalPostOpen(false);
    // else if (name === "info") setIsModalInfoOpen(false);
    else return;
  };

  useEffect(() => {
    const handleBodyClass = () => {
      if (document.body) {
        document.body.classList.toggle("fixed-body", isModalPostOpen);
      }
    };
    handleBodyClass();
    return () => {
      handleBodyClass();
    };
  }, [isModalPostOpen]);

  return (
    <main className="has-nav">
      <NavigationHeader />
      <section className="standard-body flex">
        <div className="feed">
          <Stories
            stories={[{ id: 1 }, { id: 2 }, { id: 3 }]}
            isHighlights={false}
          />
          <Posts
            posts={posts}
            openModal={(id, index) =>
              openModal("post", { postId: id, postIndex: index })
            }
          />
        </div>
        <Suggestions items={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
      </section>
      <Footer />
      {isModalPostOpen && (
        <ModalPost
          posts={posts[params.postIndex]}
          params={params}
          returnPath={"/"}
          close={() => closeModal("post")}
        />
      )}
    </main>
  );
}

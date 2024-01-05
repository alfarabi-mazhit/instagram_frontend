import GridPost from "./grid-post";
import FeedPost from "./feed-post";

export default function Posts({ posts, openModal, openPage, type = "feed" }) {
  const open = openModal || openPage;
  if (type === "grid") {
    return (
      <div className="grid-posts">
        {posts.map((post, index) => (
          <GridPost key={post.id} post={post} open={(id) => open(id, index)} />
        ))}
      </div>
    );
  } else if (type === "feed") {
    return (
      <div className="feed-posts">
        {posts.map((post, index) => (
          <FeedPost
            key={post.id}
            post={post}
            openModal={(id) => open(id, index)}
          />
        ))}
      </div>
    );
  }
}

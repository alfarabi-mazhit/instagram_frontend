export default function GridPost({ post, open }) {
  return (
    post && (
      <a key={post.id} className="grid-post" onClick={() => open(post.id)}>
        <img
          src={post.mediaUrl || "/images/profile-photo-example.jpg"}
          alt=""
        />
        <div className="hovering-post">
          <div className="hovering-post-details">
            <div>
              <img
                src="/images/icons/white-heart-icon.png"
                alt=""
                draggable="false"
              />
              {post.likesCount || 68}
            </div>
            <div>
              <img
                src="/images/icons/comment-icon.png"
                alt=""
                draggable="false"
              />
              {post.likesCount || 10}
            </div>
          </div>
        </div>
      </a>
    )
  );
}

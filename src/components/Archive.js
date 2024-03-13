import { memo, useState } from "react";
import { createRandomPost } from "../util/createRandomPost";
import { usePosts } from "../contexts/PostContext";

const Archive = memo(function Archive() {
  const { onAddPost } = usePosts();

  const [posts] = useState(() =>
    Array.from({ length: 1000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

export default Archive;

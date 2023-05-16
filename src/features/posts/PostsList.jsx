import { useEffect } from "react";
import {
  selectAllPosts,
  getPostsStatus,
  fetchPosts,
  getPostsError,
} from "./postSlice";
import { useSelector } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === "loading") {
    content = <p>loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt post={post} key={post.id} />
    ));
  } else {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostsList;

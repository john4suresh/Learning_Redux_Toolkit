// import { useEffect } from "react";
import {
  getPostsStatus,
  // fetchPosts,
  getPostsError,
  selectPostIds,
} from "./postSlice";
import { useSelector } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);
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
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt postId={postId} key={postId} />
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

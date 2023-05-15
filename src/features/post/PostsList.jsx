import AddPostForm from "./AddPostForm";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { selectAllPosts } from "./postSlice";
import { useSelector } from "react-redux";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <AddPostForm />
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;

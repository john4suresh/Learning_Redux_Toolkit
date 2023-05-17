/* eslint-disable no-unused-vars */
import "./App.css";
import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import User from "./features/users/User";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="todo" element={<TodoList /> }/>
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
        <Route path="/users" element={<UsersList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

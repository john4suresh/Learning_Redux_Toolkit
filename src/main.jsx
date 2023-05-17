/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import App from "./App1.jsx";
import "./index.css";
// import { store } from "./app/store.js";
// import { Provider } from "react-redux";
// import { fetchPosts } from "./features/posts/postSlice.js";
// import { fetchUsers } from "./features/users/usersSlice.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice.js";

// store.dispatch(fetchPosts());
// store.dispatch(fetchUsers());

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <Provider store={store}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/*" element={<App />} />
//           </Routes>
//         </BrowserRouter>
//     </Provider>
//   </>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ApiProvider api={apiSlice}>
        <App />
    </ApiProvider>
  </>
);
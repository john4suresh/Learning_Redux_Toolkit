import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increaseCount, getCount } from "../features/posts/postSlice";


const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <header className="header">
      <h1>Redux blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
        </ul>
        <button onClick={() => dispatch(increaseCount())}>{count}</button>
      </nav>
    </header>
  );
};

export default Header;

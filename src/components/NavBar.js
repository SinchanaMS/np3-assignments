import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/np3-1/q1">20th Mar 2022: Q1</Link>
        </li>
        <li>
          <Link to="/np3-1/q2">20th Mar 2022: Q2</Link>
        </li>
        <li>
          <Link to="/np3-2/q1">22nd Mar 2022: Q1</Link>
        </li>
        <li>
          <Link to="/np3-2/q2">22nd Mar 2022: Q2</Link>
        </li>
        <li>
          <Link to="/np3-2/q3">22nd Mar 2022: Q3</Link>
        </li>
      </ul>
    </nav>
  );
}

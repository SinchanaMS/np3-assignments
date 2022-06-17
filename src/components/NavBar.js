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
        <li>
          <Link to="/np3-3/q1">23rd Mar 2022: Q1</Link>
        </li>
        <li>
          <Link to="/np3-3/q2">23rd Mar 2022: Q2/Q3</Link>
        </li>
        <li>
          <Link to="/np3-4/q1">24th Mar 2022: Q1</Link>
        </li>
        <li>
          <Link to="/np3-4/q2">24th Mar 2022: Q2/Q3</Link>
        </li>
        <li>
          <Link to="/np3-5/q1">25th Mar 2022: Q1/Q3</Link>
        </li>
        <li>
          <Link to="/np3-5/q2">25th Mar 2022: Q2</Link>
        </li>
        <li>
          <Link to="/np3-6/q1">26th Mar 2022: Q1</Link>
        </li>
        <li>
          <Link to="/np3-6/q2">26th Mar 2022: Q2</Link>
        </li>
      </ul>
    </nav>
  );
}

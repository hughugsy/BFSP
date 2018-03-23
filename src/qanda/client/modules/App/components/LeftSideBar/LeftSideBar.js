import React from 'react';
import { Link } from 'react-router';


export const LeftSideBar = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/onlineresources"> Online Resources</Link>
        </li>
        <li>
          <Link to="/Tutorship">Tutorship </Link>
        </li>
        <li>
          <Link to="/BuyAndSell"> Buy and Sell</Link>
        </li>
        <li>
          <Link to="/TeacherRating"> Teacher Ratings</Link>
        </li>
      </ul>
    </nav>
  </div>
);
export default LeftSideBar;

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, OnClick }) => {
    return (
    <div
      onClick={OnClick}
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: `${isOpen ? "0%" : "-100%"}`,
      }}
      className="SideBarContainer">
            <Link
                to={'/team'}
                className='linkHam'
                smooth={true}
                duration={600}
                key={1}>
                <p>Team</p>
            </Link>

            <Link  to={'/roadmap'}
                   className='linkHam'
                   key={2}><p>Roadmap</p></Link>

            <Link
                className='linkHam'
                to={'/quest'}
                key={3}>
                <p>Quest</p>
            </Link>

            <Link
                className='linkHam'
                to={'/whitepaper'}
                key={4}>
                <p>Whitepaper</p>
            </Link>
    </div>
  );
};

export default Sidebar;

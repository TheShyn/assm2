import React from 'react'
import {MdOutlineSearch, MdOutlineKeyboardArrowDown} from "react-icons/md"

type Props = {}

const Header = (props: Props) => {
  return (
    <nav>
    <div className="sidebar-button">
      <span className="dashboard">Dashboard</span>
    </div>
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <i className="bx bx-search"><MdOutlineSearch/></i>
    </div>
    <div className="profile-details">
      <span className="admin_name">Huy đệp choai</span>
      <i><MdOutlineKeyboardArrowDown/></i>
    </div>
  </nav>
  )
}

export default Header
import './Header.css'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined'
import { Avatar } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const [inputSearch, setInputSearch] = useState('')

  console.log(inputSearch)
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
            alt=""
          />
        </Link>
      </div>
      <div className="header__center">
        <div className="header__input">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder="Search"
            type="text"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton" />
          </Link>
        </div>
        <MicOutlinedIcon className="header__mic" />
      </div>
      <div className="header__icons">
        <VideoCallIcon />
        <AppsOutlinedIcon />
        <NotificationsActiveIcon />
        <Avatar src="https://avatars.githubusercontent.com/u/50899183?v=4" />
      </div>
    </div>
  )
}
export default Header

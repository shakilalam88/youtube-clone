import './sidebar.css'
import SidebarBox from './SidebarBox'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarBox
        selected
        Icon={HomeOutlinedIcon}
        title="Home"
      />
      <SidebarBox
        Icon={WhatshotOutlinedIcon}
        title="Trending"
      />
      <SidebarBox
        Icon={SubscriptionsOutlinedIcon}
        title="Subscription"
      />
      <hr />
      <SidebarBox
        Icon={VideoLibraryIcon}
        title="Library"
      />
      <SidebarBox
        Icon={HistoryIcon}
        title="History"
      />
      <SidebarBox
        Icon={OndemandVideoIcon}
        title="Your Videos"
      />
      <SidebarBox
        Icon={WatchLaterIcon}
        title="Watch Later"
      />
      <SidebarBox
        Icon={ThumbUpAltOutlinedIcon}
        title="Liked Video"
      />
      <SidebarBox
        Icon={ExpandCircleDownOutlinedIcon}
        title="Show More"
      />
      <hr />
    </div>
  )
}
export default Sidebar

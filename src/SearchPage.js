import ChannelRow from './ChannelRow'
import './SearchPage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import VideoRow from './VideoRow'

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/VLgVw2NEqCM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvGDlwKOPBPptoyfRwtljNUSuPww"
        channels="Sonny Sangha"
        verified
        subs="656k"
        noOfVideos={382}
        description="you can find awesome programming videos you can find awesome programming videos you can find awesome programming videos"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="you can find awesome programming videos you can find awesome programming videos you can find awesome programming videos"
        timestamp="50 seconds ago"
        channel="Sonny Sangha"
        title="Awesome Programming Videos"
        image="https://i.ytimg.com/vi/VLgVw2NEqCM/hq720.jpg?t=1455179800&amp;v=3&amp;m=s"
      />
    </div>
  )
}
export default SearchPage

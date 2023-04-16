import { Avatar } from '@mui/material'
import './ChannelRow.css'
import VerifiedItem from '@mui/icons-material/CheckCircleOutlineOutlined'

const ChannelRow = ({
  image,
  channels,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar
        className="channelRow__avatar"
        alt={channels}
        src={image}
      />
      <div className="channelRow__text">
        <h4>
          {channels} {verified && <VerifiedItem />}
        </h4>
        <p>
          {subs} subscribers + {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default ChannelRow

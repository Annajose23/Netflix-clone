import {
  PlayArrow,
  ThumbUpAltOutlined,
  Add,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
import "./listitem.scss";
import { useState } from "react";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1520953027650-0067908555fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor Lorem ipsum dolor
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;

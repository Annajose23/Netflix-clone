import {
  PlayArrow,
  ThumbUpAltOutlined,
  Add,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
import "./listitem.scss";
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function ListItem({ index, item }) {
  console.log(index, item)
  const [movie, setMovie] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try{
        const res = await axios.get("http://localhost:8800/api/movies/"+item,  {
          header:{
          token:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2ZlODhmMjI3MGVmMjc0MjczOWY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTU3ODU4MywiZXhwIjoxNjMyMDEwNTgzfQ.gJnpl5Gdg3driaofqXtYH2g7SbmKymCBSIkDelEWdEM'
        }});
        console.log(res.data)
        setMovie(res.data);
      }
      catch(err){
        console.log(err)
      }
    }
    getMovie();
  },[item]);
  //const trailer =  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <Link to={{pathname: "/watch", movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <img
        src="https://images.unsplash.com/photo-1520953027650-0067908555fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt=""
      /> */}
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="description">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}

export default ListItem;

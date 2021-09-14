import './featured.scss';
import { InfoOutlined, PlayArrow, SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Featured({type}) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async() => {
            try{
                const res = await axios.get(`/movies/random?type=${type}`)
                setContent(res.data[0]);
            }catch(err){
                console.log(err);
            }      
        }
        getRandomContent();
    },[]);
    console.log(content);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movies"? "Movies":"TV Shows"}</span>
                <select name="genre" id="genre">
                    <option>
                        Genre
                    </option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img
        src={content.img}
      />
      <div className="info">
          {/* <img
          src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYeAllFpA8IPk_ofGDi6Ib7udEMhjBn32Q0zrvWzyzsVXmffhptUSXkwKpJ6q1li6QK8w7MN7XjAM4wb95-XTHxw8SbK_4buuCzy.webp?r=6d8"
          alt=""/> */}
          <img
          src={content.imgSm}/>
          <span className="desc">
          {content.desc} 
          </span>
          <div className="buttons">
              <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <button className="more">
                  <InfoOutlined/>
                  <span>Info</span>
              </button>
          </div>
      </div>
    </div>
  );
}

export default Featured;

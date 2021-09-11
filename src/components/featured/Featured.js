import './featured.scss';
import { InfoOutlined, PlayArrow, SearchOutlined } from "@material-ui/icons";

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movie"? "Movies":"TV Shows"}</span>
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
        src="https://thehoya.com/wp-content/uploads/2014/09/B7_2NightStand_DemarestFilms-600x328.png"
        
      />
      <div className="info">
          <img
          src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYeAllFpA8IPk_ofGDi6Ib7udEMhjBn32Q0zrvWzyzsVXmffhptUSXkwKpJ6q1li6QK8w7MN7XjAM4wb95-XTHxw8SbK_4buuCzy.webp?r=6d8"
          alt=""/>
          <span className="desc">
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
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

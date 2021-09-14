import { ArrowBackOutlined } from '@material-ui/icons';
import {useLocation} from 'react-router-dom';
import './watch.scss';

function Watch() {
    const location = useLocation();
    console.log("watch", location)
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video" autoPlay controls src={location.movie.videos}/>
        </div>
    )
}

export default Watch

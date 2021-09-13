import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss';

function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video" autoPlay controls src="https://www.youtube.com/watch?v=HAyYPe-zCcQ"/>
        </div>
    )
}

export default Watch

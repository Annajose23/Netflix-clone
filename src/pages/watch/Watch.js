import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useHistory } from 'react-router-dom';

export default function Watch() {
  const history = useHistory();
  return (
    <div className="watch">
      <div className="back" onClick={() => history.push('/')}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="teaser.mp4"
      />
    </div>
  );
}
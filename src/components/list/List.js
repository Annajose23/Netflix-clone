import { ArrowBackIosOutlined, ArrowBackOutlined, ArrowForwardIosOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import './list.scss';
import ListItem from '../listItem/ListItem';

function List() {
    const handleClick = (direction) => {

    }
    return (
        <div className="list">
            <span className="listTitle">Continu Watching</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")}/>
                <div className="container">
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
            
        </div>
    )
}

export default List

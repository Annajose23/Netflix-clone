import NavBar from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async() => {
            try{
                const res = await axios.get(`http://localhost:8800/api/lists${type ? "?type=" + type:""}${genre? "&genre=" +genre:""}`,{
                    header:{
                        token:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2ZlODhmMjI3MGVmMjc0MjczOWY2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTU3ODU4MywiZXhwIjoxNjMyMDEwNTgzfQ.gJnpl5Gdg3driaofqXtYH2g7SbmKymCBSIkDelEWdEM'
                    }
                })
                setLists(res.data);
            }catch(err){
                console.log(err)
            }
        }
        getRandomLists();
    },[type, genre])

    return (
        <div className="home">
            <NavBar/>
            <Featured type={type}/>
            {lists.map((list, index) => (
                    <List list={list} key={index}/>
            ))}
        </div>
    )
}

export default Home

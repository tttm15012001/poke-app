import React from "react";
import ViewDetail from "../detail/detail";
import URL from "../api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css'
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function PokemonCard(props) {
    const { name } = props;
    const [thumbnail, setThumbnail] = useState('');

    async function getThumbnail() {
        try {
            let temp_thumbnail = await axios.get(`${URL.frontform}/${name}`);
            setThumbnail(temp_thumbnail.data.sprites.front_default);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getThumbnail();
    }, [thumbnail])

    return (
        <div className="card">
            <div className="img">
                {thumbnail ? (
                    <img src={thumbnail}/>
                ) : (
                    <Skeleton variant="rectangular" width={210} height={118} />
                )}
            </div>
            <div className="p"><b>{name}</b></div>
            <div className="link"><Link to={`/detail/${name}`} state={{ thumbnail: thumbnail }}>View Detail</Link></div>
        </div>
    )
}

export default PokemonCard;
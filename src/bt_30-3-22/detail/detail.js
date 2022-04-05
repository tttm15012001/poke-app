import React from "react";
import { useParams, useLocation } from "react-router-dom";

function ViewDetail(props) {
    let { name } = useParams();
    const location = useLocation();
    const { thumbnail } = location.state;
    
    return (
        <div className="detail">
            <div>
                <img src={thumbnail && thumbnail} />
            </div>
            <div className="p"><b>{name}</b></div>
            <div></div>
        </div>
    )
};

export default ViewDetail;
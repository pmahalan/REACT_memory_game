import React from "react";

function PictureCard(props) {
    return (
        <div className="card col-sm-3">

        <img src={props.image} onClick={() => props.clickImage(props.id)} />



        </div>

    )
}

export default PictureCard;
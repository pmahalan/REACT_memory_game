import React from "react";

function PictureCard(props) {
    return (
        <div className="card col-sm-3">

        <img src={props.image} />


        </div>

    )
}

export default PictureCard;
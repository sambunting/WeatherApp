import React from 'react';

import './title.css';

function Title(props) {
    const { place, current, icon } = props.data;

    let titleIcon;

    titleIcon = icon;

    if (titleIcon === "sleet") {
        titleIcon = "snow"
    }

    return (
        <div className="title">
            <img className="title__icon" src={`icons/${titleIcon}.svg`} alt={titleIcon}/>
            <div className="title__mainInfo">
                <h2>{current}</h2>
                <p>{place}</p>
            </div>
        </div>
    )
}

export default Title;
import React from 'react';

import './title.css';

function Title(props) {
    const { place, current, icon, temprature } = props.data;

    let titleIcon;

    titleIcon = icon;

    if (titleIcon === "sleet") {
        titleIcon = "snow"
    }

    return (
        <div className="title">
            <div className="title__left">
                <img className="title__icon" src={`icons/${titleIcon}.svg`} alt={titleIcon}/>
                <div className="title__mainInfo">
                    <h2>{current}</h2>
                    <p>{place}</p>
                </div>
            </div>
            
            <div className="title__temprature">
                <h2>{Math.round(temprature)}</h2>
                <p>°C</p>
            </div>
        </div>
    )
}

export default Title;
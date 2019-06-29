import React from 'react';

import './dayForcast.css'

class DayForcast extends React.Component {
    render() {
        const { icon, summary, time, temperatureHigh } = this.props.data;

        const date = new Date(time * 1000);
        const day = new Intl.DateTimeFormat('en-GB', { weekday: 'long'}).format(date);
        const dateString = `${day} ${date.getDate()} ${date.toLocaleString('en-GB', { month: 'long' })}`

        return (
            <div className="dayForcast">
                <img className="dayForcast__icon" src={`icons/${icon}.svg`} alt={icon}/>
                <div className="dayForcast__left">
                    <p className="dayForcast__left-date">{dateString}</p>
                    <p className="dayForcast__left-summary">{summary}</p>
                </div>
                <div className="dayForcast__right">
                    <h3>{Math.round(temperatureHigh)}<span>°C</span></h3>
                </div>
            </div>
        )
    }
    
}

export default DayForcast;
import React from 'react';

import './dayForcast.css'

class DayForcast extends React.Component {
    render() {
        const { icon, summary, time } = this.props.data;

        const date = new Date(time * 1000);
        const day = new Intl.DateTimeFormat('en-GB', { weekday: 'long'}).format(date);
        const dateString = `${day} ${date.getDate()} ${date.toLocaleString('en-GB', { month: 'long' })}`

        return (
            <div className="dayForcast">
                <img className="title__icon" src={`icons/${icon}.svg`} alt={icon}/>
                <div className="dayForcast__left">
                    <p className="dayForcast__left-date">{dateString}</p>
                    <p className="dayForcast__left-summary">{summary}</p>
                </div>
            </div>
        )
    }
    
}

export default DayForcast;
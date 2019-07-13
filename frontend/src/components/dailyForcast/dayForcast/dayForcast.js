import React from 'react';

import './dayForcast.scss'

class DayForcast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    formatDate = (input) => {
        const date = new Date(input);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);

        return `${hours}:${minutes}`;
    }

    toggleView = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const { icon, summary, time, temperatureHigh, sunriseTime, sunsetTime } = this.props.data;

        const date = new Date(time * 1000);
        const day = new Intl.DateTimeFormat('en-GB', { weekday: 'long'}).format(date);
        const dateString = `${day} ${date.getDate()} ${date.toLocaleString('en-GB', { month: 'long' })}`

        const sunrise = this.formatDate(new Date(sunriseTime * 1000));
        const sunset = this.formatDate(new Date(sunsetTime * 1000));

        const visibleClass = (this.state.visible) ? '' : 'dayForcast__info-hidden'; 

        return (
            <div className={`dayForcast dayForcast-${this.props.index}`}>
                <div className={'dayForcast__overview'} onClick={this.toggleView}>
                    <img className="dayForcast__overview__icon" src={`icons/${icon}.svg`} alt={icon}/>
                    <div className="dayForcast__overview__left">
                        <p className="dayForcast__overview__left-date">{dateString}</p>
                        <p className="dayForcast__overview__left-summary">{summary}</p>
                    </div>
                    <div className="dayForcast__overview__right">
                        <h3>{Math.round(temperatureHigh)}<span>°C</span></h3>
                    </div>
                </div>
                <div className={`dayForcast__info ${visibleClass}`}>
                    <div className="dayForcast__info__sunrise">
                        <img src={`icons/Sunrise.svg`} alt="sunrise"></img>
                        <p>{sunrise}</p>
                        <img className="sunset" src={`icons/Sunset.svg`} alt="sunset"></img>
                        <p>{sunset}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default DayForcast;
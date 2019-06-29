import React from 'react';

import './dailyForcast.css';
import DayForcast from './dayForcast/dayForcast';

class DailyForcast extends React.Component {
    render() {
        return (
            <div className="dailyForcast">
                {this.props.data.map((day, index) => 
                    <DayForcast data={day} key={index}/>
                )}
            </div>
        )
    }
    
}

export default DailyForcast;
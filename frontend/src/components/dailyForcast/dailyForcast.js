import React from 'react';

import './dailyForcast.css';
import DayForcast from './dayForcast/dayForcast';

class DailyForcast extends React.Component {
    render() {
        return (
            <div className="dailyForcast">
                {this.props.data.map((day) => 
                    <DayForcast data={day}/>
                )}
            </div>
        )
    }
    
}

export default DailyForcast;
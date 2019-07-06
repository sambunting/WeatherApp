import React from 'react';

import './dailyForcast.scss';
import DayForcast from './dayForcast/dayForcast';

class DailyForcast extends React.Component {
    render() {
        return (
            <div className="dailyForcast">
                {this.props.data.map((day, index) => 
                    <DayForcast data={day} key={index} index={index}/>
                )}
            </div>
        )
    }
    
}

export default DailyForcast;
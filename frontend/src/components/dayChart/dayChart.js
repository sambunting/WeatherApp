import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

import './dayChart.css';

let isDown = false;
let startX;
let scrollLeft;

class DayChart extends React.Component {
    onMouseDown = (e) => {
        e.persist();
        isDown = true;
        startX = e.pageX - this.refs.slider.offsetLeft;
        scrollLeft = this.refs.slider.scrollLeft;
    }

    onMouseLeave = (e) => {
        isDown = false;
    }

    onMouseUp = (e) => {
        isDown = false;
    }

    onMouseMove = (e) => {
        e.persist();
        if (!isDown) return;
        
        e.preventDefault();

        const x = e.pageX - this.refs.slider.offsetLeft;
        const walk = x - startX;
        this.refs.slider.scrollLeft = scrollLeft - walk;
    }
    
    render() {
        const { chartData } = this.props;

        let maxValue = chartData[0].y;
        let minValue = chartData[0].y;

        chartData.map((item, index) => {
            if (maxValue < item.y) {
                maxValue = item.y
            }

            if (minValue > item.y) {
                minValue = item.y;
            }

            const date = new Date(item.x * 1000);        
            chartData[index].x = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}`;
            
            return true;
        })

        return (
            <div className="dayChart" ref="slider" onMouseDown={(e) => this.onMouseDown(e)} onMouseLeave={(e) => this.onMouseLeave(e)} onMouseUp={(e) => this.onMouseUp(e)} onMouseMove={(e) => this.onMouseMove(e)}>
                <VictoryChart
                    maxDomain={{y: maxValue + 1}}
                    minDomain={{y: minValue - 1}}
                    height={130}
                    widthh={800}
                    padding={{left: 20, right: 20, top: 30, bottom: 50}}
                    >
                    <VictoryLine
                        style={{
                        data: { stroke: "#FFC107" },
                        labels: { fontSize: 10 }
                        }}
                        height={100}
                        data={chartData}
                        animate={{
                        onLoad: { duration: 1000 }
                        }}
                        labels={(d) => `${Math.round(d.y)}°`}
                        interpolation="natural"
                    />
                    <VictoryAxis style={{
                        axis: {stroke: "none"},
                        axisLabel: { fontSize: 10 },
                        tickLabels: {fontSize: 8}
                    }} />
                </VictoryChart>
                
                
            </div>
        )
    }

    
}

export default DayChart;
import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../src/components/title/title';
import Search from '../src/components/search/search';
import DayChart from '../src/components/dayChart/dayChart';
import DailyForcast from '../src/components/dailyForcast/dailyForcast';
import Footer from '../src/components/footer/footer';

storiesOf('Title', module)
    .add('default', () => (
        <Title data={{
            "current": "Clear",
            "icon": "",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('clear-day', () => (
        <Title data={{
            "current": "Clear",
            "icon": "clear-day",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('clear-night', () => (
        <Title data={{
            "current": "Clear",
            "icon": "clear-night",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('rain', () => (
        <Title data={{
            "current": "Rain",
            "icon": "rain",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('snow', () => (
        <Title data={{
            "current": "Snow",
            "icon": "snow",
            "place": "Manchester, UK",
            "temprature": 2
        }}/>
    ))
    .add('sleet', () => (
        <Title data={{
            "current": "Sleet",
            "icon": "sleet",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('wind', () => (
        <Title data={{
            "current": "Wind",
            "icon": "wind",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('fog', () => (
        <Title data={{
            "current": "fog",
            "icon": "fog",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('cloudy', () => (
        <Title data={{
            "current": "Cloudy",
            "icon": "cloudy",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('partly-cloudy-day', () => (
        <Title data={{
            "current": "Partly Cloudy Day",
            "icon": "partly-cloudy-day",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))
    .add('partly-cloudy-night', () => (
        <Title data={{
            "current": "Partly Cloudy Night",
            "icon": "partly-cloudy-night",
            "place": "Manchester, UK",
            "temprature": 15
        }}/>
    ))

storiesOf('Search', module)
    .add('default', () => (
        <Search/>
    ))

storiesOf('DayChart', module)
    .add('default', () => (
        <DayChart chartData={[
            {x: "1561496400", y: 15},
            {x: "1561500000", y: 14},
            {x: "1561503600", y: 14},
            {x: "1561507200", y: 14},
            {x: "1561510800", y: 13},
            {x: "1561514400", y: 13},
            {x: "1561518000", y: 12},
            {x: "1561521600", y: 12},
            {x: "1561525200", y: 12},
            {x: "1561528800", y: 13},
            {x: "1561532400", y: 15},
            {x: "1561536000", y: 16},
            {x: "1561539600", y: 17},
            {x: "1561543200", y: 17},
            {x: "1561546800", y: 18},
            {x: "1561550400", y: 19}
        ]}/>
    ))    

storiesOf('Daily Forcast', module)
    .add('default', () => (
        <DailyForcast data={[
            {
                icon: "rain", 
                summary: "Light rain in the morning and afternoon.", 
                time: "1561417200"
            },
            {
                icon: "partly-cloudy-day", 
                summary: "Mostly cloudy throughout the day.", 
                time: "1561503600"
            },
            {
                icon: "partly-cloudy-day", 
                summary: "Partly cloudy throughout the day.", 
                time: "1561590000"
            },
            {
                icon: "clear-day", 
                summary: "Clear throughout the day.", 
                time: "1561676400"
            },
            {
                icon: "partly-cloudy-day", 
                summary: "Partly cloudy throughout the day.", 
                time: "1561762800"
            },
            {
                icon: "partly-cloudy-day", 
                summary: "Mostly cloudy throughout the day.", 
                time: "1561849200"
            },
            {
                icon: "partly-cloudy-day", 
                summary: "Mostly cloudy throughout the day.", 
                time: "1561935600"
            },
            {
                icon: "clear-day", 
                summary: "Partly cloudy throughout the day.", 
                time: "1562022000"
            }
        ]}/>
    ))

storiesOf('Footer', module)
    .add('default', () => (
        <Footer/>
    ))
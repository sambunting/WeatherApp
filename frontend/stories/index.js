import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../src/components/title/title';
import Search from '../src/components/search/search';

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
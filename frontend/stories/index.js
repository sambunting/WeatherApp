import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from '../src/components/title/title';

storiesOf('Title', module)
    .add('default', () => (
        <Title data={{
            "current": "Clear",
            "icon": "",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('clear-day', () => (
        <Title data={{
            "current": "Clear",
            "icon": "clear-day",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('clear-night', () => (
        <Title data={{
            "current": "Clear",
            "icon": "clear-night",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('rain', () => (
        <Title data={{
            "current": "Rain",
            "icon": "rain",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('snow', () => (
        <Title data={{
            "current": "Snow",
            "icon": "snow",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('sleet', () => (
        <Title data={{
            "current": "Sleet",
            "icon": "sleet",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('wind', () => (
        <Title data={{
            "current": "Wind",
            "icon": "wind",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('fog', () => (
        <Title data={{
            "current": "fog",
            "icon": "fog",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('cloudy', () => (
        <Title data={{
            "current": "Cloudy",
            "icon": "cloudy",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('partly-cloudy-day', () => (
        <Title data={{
            "current": "Partly Cloudy Day",
            "icon": "partly-cloudy-day",
            "place": "Manchester, UK"
        }}/>
    ))
    .add('partly-cloudy-night', () => (
        <Title data={{
            "current": "Partly Cloudy Night",
            "icon": "partly-cloudy-night",
            "place": "Manchester, UK"
        }}/>
    ))
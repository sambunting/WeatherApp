import React from 'react';
import axios from 'axios';
import './App.css';

import Title from './components/title/title';
import Search from './components/search/search';
import DayChart from './components/dayChart/dayChart';
import DailyForcast from './components/dailyForcast/dailyForcast';
import Footer from './components/footer/footer';
import ReactGA from 'react-ga';




class App extends React.Component {
  constructor(props) {
    super(props)

    this.API_URL = process.env.REACT_APP_API_URL;

    this.state = {
      loaded: false,
    }
    
    ReactGA.initialize('UA-119257917-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  getIpAddress() {
    return new Promise((resolve, reject) => {
        axios.get(`${this.API_URL}/ipaddress`)
        .then(response => {
            resolve(response.data)
        }).catch(response => {
            reject(response);
        });
    })
  }

  getLocation(string) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.API_URL}/location/${string}`)
        .then(response => {
            resolve(response.data)
        }).catch(response => {
            reject(response);
        });
    })
  }

  getWeather(lat, long) {
    return new Promise((resolve, reject) => {
        axios.get(`${this.API_URL}/weatherData/${lat}/${long}`)
        .then(response => {
            resolve(response.data)
        }).catch(response => {
            reject(response);
        });
    })
  }
  
  getGeolocation() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position));
      })
    }
  }

  async componentDidMount() {
    const ipAddressData = await this.getIpAddress();
    let geolocationData;

    if (ipAddressData.status === "fail") {
      geolocationData = await this.getGeolocation();
    }

    let locationString;

    if (`${ipAddressData.city},${ipAddressData.country}` !== "undefined,undefined") {
      locationString = `${ipAddressData.city},${ipAddressData.country}`;
    } else {
      locationString = `${geolocationData.coords.latitude}, ${geolocationData.coords.longitude}`;
    }

    const locationData = await this.getLocation(locationString);
    
    if (!geolocationData) {
      geolocationData = {
        coords: {
          latitude: locationData.results[0].geometry.location.lat,
          longitude: locationData.results[0].geometry.location.lng
        }
      }
    }

    const weatherData = await this.getWeather(geolocationData.coords.latitude, geolocationData.coords.longitude);

    this.setState({
      locationData: locationData, 
      weatherData: weatherData,
      loaded: true
    });
  }

  async getWeatherByGeolocation() {
    this.setState({
      loaded: false
    }, async () => {
      const geoData = await this.getGeolocation();
      const locationData = await this.getLocation(`${geoData.coords.latitude}, ${geoData.coords.longitude}`);
      const weatherData = await this.getWeather(geoData.coords.latitude, geoData.coords.longitude)

      ReactGA.event({
        category: 'Search',
        action: 'Geolocation Search',
        label: `${geoData.coords.latitude}, ${geoData.coords.longitude}`
      })

      this.setState({
        loaded: true, 
        weatherData: weatherData,
        locationData: locationData
      })      
    });
  }

  async getWeatherByString(string) {
    this.setState({
      loaded: false,
    }, async () => {
      const locationData = await this.getLocation(string);
      const weatherData = await this.getWeather(locationData.results[0].geometry.location.lat, locationData.results[0].geometry.location.lng)
    
      ReactGA.event({
        category: 'Search',
        action: 'Text Search',
        label: string
      })

      this.setState({
        loaded: true, 
        weatherData: weatherData,
        locationData: locationData
      })      
    })
  }

  render() {
    let locationString = "";
    let locationArray = [];

    if (this.state.locationData) {
      if (this.state.locationData.summary.postal_town) {
        locationArray.push(this.state.locationData.summary.postal_town);
      }

      if (this.state.locationData.summary.colloquial_area) {
        locationArray.push(this.state.locationData.summary.colloquial_area);
      }

      if (this.state.locationData.summary.administrative_area_level_1) {
        locationArray.push(this.state.locationData.summary.administrative_area_level_1);
      }

      if (this.state.locationData.summary.country) {
        locationArray.push(this.state.locationData.summary.country);
      }

      locationString = locationArray.join(', ');      
    }
  
    let todayTemprature = [];

    if (this.state.weatherData) {  
      this.state.weatherData.hourly.data.map((hour) => {
        if (todayTemprature.length < 16) {
          todayTemprature.push({
            x: hour.time,
            y: Math.round(hour.temperature)
          })
        }

        return true
      })
    }

    return (
      <div className="App">
        <div className="search-container">
          <Search onGeolocationRequest={() => this.getWeatherByGeolocation()} onSearch={(string) => this.getWeatherByString(string)}/>
        </div>

        {this.state.loaded ? (
          <>
          <Title data={{
            place: locationString,
            current: this.state.weatherData.currently.summary,
            icon: this.state.weatherData.currently.icon,
            temprature: this.state.weatherData.currently.temperature
          }}/>

          <DayChart
            chartData={todayTemprature}
          ></DayChart>

          <DailyForcast data={this.state.weatherData.daily.data}></DailyForcast>
          </>
        ) : (
          <div id="loading-screen">
            <div className="lds-dual-ring"></div>
          </div>
        )}

        <Footer></Footer>
      </div>
    );    
  }
}

export default App;

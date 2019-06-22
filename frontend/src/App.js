import React from 'react';
import axios from 'axios';
import './App.css';

import Title from './components/title/title';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.API_URL = process.env.REACT_APP_API_URL;

    this.state = {
      loaded: false,
    }
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

    const locationData = await this.getLocation(`${ipAddressData.city},${ipAddressData.country}` || `${geolocationData.coords.latitude}, ${geolocationData.coords.longitude}`);
    
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

    return (
      <div className="App">
        {this.state.loaded &&
          <Title data={{
            place: locationString,
            current: this.state.weatherData.currently.summary,
            icon: this.state.weatherData.currently.icon
          }}/>
        }
      </div>
    );    
  }
}

export default App;

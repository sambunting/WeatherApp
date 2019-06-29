import React from 'react';

import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <a href="https://darksky.net/poweredby/" rel="noopener noreferrer" target="_blank">
                <img className="footer__attribution" src="attribution.png" alt="Powered by Dark Sky"/>
                </a>
            <p>Weather data provided by <a href="https://darksky.net/poweredby/" rel="noopener noreferrer" target="_blank">Dark Sky</a>.</p>
            <p>Developed by Sam Bunting | <a href="https://github.com/sambunting/WeatherApp" rel="noopener noreferrer" target="_blank">GitHub</a></p>
        </div>
    )
}

export default Footer;
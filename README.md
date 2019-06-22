
# WeatherApp
Like many other developers, I have also made one.

This project has a ReactJS fronend and a Node/Express backend/API.

Project Development Setup
-
Download this repository as a `.zip` file, or clone the repository using the command line with `git clone` .

In order for the app to run, you need to sign up for two API services:

* [Google Geocoding API]([https://developers.google.com/maps/documentation/geocoding/start](https://developers.google.com/maps/documentation/geocoding/start)) - For locating and retrieving information on a users location
* [Dark Sky API]([https://darksky.net/dev](https://darksky.net/dev)) - For retrieving weather data.

The two API keys should be placed inside of a new `.env` file in the `server` directory. You can duplicate the existing `.env-SAMPLE` file and replace the placeholder text with your acquired API keys.

```
GOOGLE_GEOCODE_API=YOUR_GOOGLE_MAPS_GEOCODE_API_KEY
DARKSKY_API=YOUR_DARKSKY_API_KEY
```

Once the environment variables have been setup, open two terminals, one for the `frontend/` directory, the other for the `server/` directory.

On **both** terminals, run:
```
npm i
```
When complete, run the start command on both directories.
```
npm start
```
The application should now run on `localhost:3000` - with the API service running on `localhost:5000`.

Storybook
-
This project uses Storybook - If you'd like to see the components of the React project, you can run `npm run storybook` in the `frontend` directory.  
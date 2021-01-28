import React from 'react';
import ReactDOM from 'react-dom';
import './js/WeatherWidget.css';
import WeatherWidget from './js/WeatherWidget';
import './images/sun.png';


ReactDOM.render(
  <WeatherWidget
    weather="sunny" /* props: 'sunny', 'cloudy', 'thunderstorm', 'snowy', 'rainy' */
    city="Yoshkar-Ola"
    temperature={15}
    precipitation={5}
    wind={7}
    humidity={52}
    pressure={750} />,
  document.querySelector('#root')
);

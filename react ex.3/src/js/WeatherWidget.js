import React from 'react';
import { PropTypes } from 'prop-types';

function WeatherWidget(props) {
  return (
    <div className="main">
      <div className={'header ' + props.weather}>
        <div className="header__icon"></div>
      </div>
      <div className="content">
        <div className="content__item">city: {props.city}</div>
        <div className="content__item">temperature: {props.temperature}°С</div>
        <div className="content__item">wind: {props.wind}m/s</div>
        <div className="content__item">humidity: {props.humidity}%</div>
        <div className="content__item">precipitation: {props.precipitation}%</div>
        <div className="content__item">humidity: {props.pressure}mm</div>
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  weather: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  precipitation: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default WeatherWidget;

import React from 'react';
import { Text, Image, View } from 'react-native';

const highCholesterol = require('../assets/images/high-cholesterol.png');
const arthritis = require('../assets/images/arthritis.png');
const chronicKidney = require('../assets/images/kidney.png');
const pulmonary = require('../assets/images/pul.png');

const heartDisease = require('../assets/images/heart.png');
const bloodPressure = require('../assets/images/highblood.png');

const breakfastRecommendations = require('../assets/images/breakfast-recommendations.png');
const diet = require('../assets/images/diet.png');
const exercise = require('../assets/images/exercise.png');
const supplements = require('../assets/images/supplements.png');

const styles = {
  icon: {
    width: 98,
    height: 98,
  },
};

const sources = {
  highCholesterol,
  arthritis,
  chronicKidney,
  pulmonary,
  heartDisease,
  bloodPressure,
  breakfastRecommendations,
  diet,
  exercise,
  supplements,
}

export default class Icon extends React.Component {
  render() {
    const {
      iconName,
      style,
    } = this.props;

    return (
      <Image source={sources[iconName]} style={style || styles.icon}></Image>
    );
  }
}

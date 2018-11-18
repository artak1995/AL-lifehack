import React from 'react';
import { Text, Image, View } from 'react-native';

const highCholesterol = require('../assets/images/high-cholesterol.png');
const arthritis = require('../assets/images/arthritis.png');
const chronicKidney = require('../assets/images/kidney.png');
const pulmonary = require('../assets/images/pul.png');

const heartDisease = require('../assets/images/heart.png');
const bloodPressure = require('../assets/images/highblood.png');

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
  bloodPressure
}

export default class Icon extends React.Component {
  render() {
    const {
      iconName,
    } = this.props;

    return (
      <Image source={sources[iconName]} style={styles.icon}></Image>
    );
  }
}

import React from 'react';
import { Text, Image, View } from 'react-native';

const highCholesterol = require('../assets/images/high-cholesterol.png');

const styles = {
  highCholesterol: {
    width: 98,
    height: 98,
  },
};

const sources = {
  highCholesterol,
}

export default class Icon extends React.Component {
  render() {
    const {
      iconName,
    } = this.props;

    return (
      <Image source={sources[iconName]} style={styles[iconName]}></Image>
    );
  }
}

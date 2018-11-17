import React from 'react';
import { Button as ReactButton } from 'react-native';
import Colors from '../constants/Colors';

const buttonStyle = (style) => {
  return {
    width: 190,
    height: 38,
    borderRadius: 100,
    boxShadow: '10px solid rgba(255,255,255,.16)',
    ...style,
  }
};

export default class RoundButton extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <ReactButton {...props} style={buttonStyle(this.props)} />
    );
  }
}
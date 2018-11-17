import React from 'react';
import { View, Button, Text } from 'react-native';
import Colors from '../constants/Colors';

const buttonStyle = (style) => {
  return {
    width: 190,
    height: 38,
    borderRadius: 100,
    boxShadow: '10px solid rgba(255,255,255,.16)',
    backgroundColor: Colors.tintColor,
    textAlign: 'middle',
    ...style,
  }
};

const textStyle = () => ({
  padding: '8px',
});

export default class RoundButton extends React.Component {
  render() {
    const { children, onPress } = this.props;

    return (
      <View style={buttonStyle(this.props)} onPress={onPress}>
        <Text style={textStyle()}>{children}</Text>
      </View>
    );
  }
}
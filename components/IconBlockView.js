import React from 'react';
import { Text, Image, View } from 'react-native';
import Icon from './Icon';

const containerStyle = () => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
});

const iconStyle = () => ({
  // backgroundColor: 'blue',
});

const blockStyle = ({ verticalGap = 10 }) => ({
  // backgroundColor: 'red',
  marginLeft: verticalGap,
  width: '100%',
});

export default class IconBlockView extends React.Component {
  render() {
    const {
      verticalGap, // optional
      iconName, // remember to add image to asset/images and update components/Icon
      children,
    } = this.props;

    return (
      <View style={containerStyle(this.props)}>
        <View key="icon" style={iconStyle(this.props)}>
          <Icon iconName={iconName} />
        </View>
        <View key="block" style={blockStyle(this.props)}>{children}</View>
      </View>
    );
  }
}

// Usage:
// <IconBlockView iconName="highCholesterol">
//   <Image source={userImg} style={styles.user}></Image>
// </IconBlockView>

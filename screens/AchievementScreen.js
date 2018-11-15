import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Colors from '../constants/Colors';

export default class AchievementScreen extends React.Component {
  static navigationOptions = {
    title: 'Achievements',
    headerTintColor: Colors.tintColor,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}

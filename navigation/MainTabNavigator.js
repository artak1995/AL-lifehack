import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LogScreen from '../screens/LogScreen';
import ReportScreen from '../screens/ReportScreen';
import AchievementScreen from '../screens/AchievementScreen';

const LogStack = createStackNavigator({
  Log: LogScreen,
});

LogStack.navigationOptions = {
  tabBarLabel: 'My Log',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='bar-chart'
    />
  ),
};

const ReportStack = createStackNavigator({
  Report: ReportScreen,
});

ReportStack.navigationOptions = {
  tabBarLabel: 'My Report',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='heartbeat'
    />
  ),
};

const AchievementStack = createStackNavigator({
  Settings: AchievementScreen,
});

AchievementStack.navigationOptions = {

  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='trophy'
    />
  ),
};

export default createBottomTabNavigator({
  LogStack,
  ReportStack,
  AchievementStack,
}, { tabBarOptions: {
  activeTintColor: '#D31146'
}});

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LogScreen from '../screens/LogScreen';
import ReportScreen from '../screens/ReportScreen';
import AchievementScreen from '../screens/AchievementScreen';
import DoctorAiScreen from '../screens/DoctorAiScreen';

const DoctorAiStack = createStackNavigator({
  DoctorAi: DoctorAiScreen,
});

DoctorAiStack.navigationOptions = {
  tabBarLabel: 'Doctor AI',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='commenting-o'
    />
  ),
};

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
  DoctorAiStack,
  LogStack,
  ReportStack,
  AchievementStack,
}, { tabBarOptions: {
  activeTintColor: '#D31146'
}});

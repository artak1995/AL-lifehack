import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Colors from '../constants/Colors';
import { isIphoneX } from '../constants/Layout';
import { Button, Text, Tab, Tabs, ScrollableTab } from 'native-base';
const pointImg = require('../assets/images/vitalityPoint.png');

export default class LogScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'My log',
    // headerTintColor: Colors.tintColor,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Tabs
          style={styles.topMenu}
          tabBarUnderlineStyle={styles.tabUnderline}
          renderTabBar={()=> (
            <ScrollableTab />
          )}
        > */}
        <Tabs 
          style={styles.topMenu} 
          tabBarUnderlineStyle={styles.tabUnderline} 
          renderTabBar={()=> <ScrollableTab style={{ backgroundColor: 'white' }}/>}
        >
          <Tab 
            heading='My log' 
            tabStyle={styles.topMenu}
            activeTabStyle={styles.topMenu}
            textStyle={{ color: Colors.tabIconSelected }}
            activeTextStyle={styles.activeText}
          >
          <Calendar
            style={{
              height: 350
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#FF6774',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#FF6774',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#FF6774',
              selectedDotColor: '#ffffff',
              arrowColor: '#FF6774',
              monthTextColor: '#2D2D2D',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
          <View style={styles.center}>
            <Image source={pointImg} style={styles.pointImg} />
            <Text style={styles.pointIndroduction}>
              You have logged your health for 14 consecutive days! As a reward you have received 14 ‘Vitality Points’, Keep it up!
            </Text>
            <View style={styles.center}>
            <Button block rounded style={styles.button}>
              {/* Add Log */}
              <Text style={styles.buttonText}>Add Log</Text>
            </Button>
            </View>
          </View>
          </Tab>
          <Tab 
            heading='Optimal Score'
            tabStyle={styles.topMenu}
            activeTabStyle={styles.topMenu}
            textStyle={{ color: Colors.tabIconSelected }}
            activeTextStyle={styles.activeText}
          >
          </Tab>
          <Tab 
            heading='My Report'
            tabStyle={styles.topMenu}
            activeTabStyle={styles.topMenu}
            textStyle={{ color: Colors.tabIconSelected }}
            activeTextStyle={styles.activeText}
          >
          </Tab>
        </Tabs>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIphoneX ? 35 : 15,
    backgroundColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointImg: {
    width: 60,
    height: 60,
  },
  pointIndroduction: {
    marginTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    fontSize: 14,
    color: '#2D2D2D',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#FF6774',
    width: 180,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  topMenu: {
    backgroundColor: '#fff',
  },
  tabUnderline: {
    backgroundColor: Colors.tabIconSelected,
  },
  activeText: {
    color: Colors.tabIconSelected,
    fontWeight: 'bold',
  },
})

import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import Colors from '../constants/Colors';
const userImg = require('../assets/images/user.png')

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    title: 'Weekly Log Book',
    headerTintColor: Colors.tintColor,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Weekly Health Overview</Text>
        <View style={styles.center}>
          <Image source={userImg} style={styles.user}></Image>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  header: {
    color: Colors.headerColor,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    marginTop: 20,
    width: 120,
    height: 120,
  }
});

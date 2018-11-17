import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import Divider from '../components/Divider';
import Colors from '../constants/Colors';
const userImg = require('../assets/images/user.png');
const ocrImg = require('../assets/images/ocr.png');

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    title: 'My Report',
    headerTintColor: Colors.tintColor,
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.center}>
        <Text style={[styles.header]}>Common Disease to look out for with same age, gender and lifestyle.</Text>
        <View style={{ width: '100%', ...styles.center }}>
          <Image source={userImg} style={styles.user}></Image>
          <Image source={ocrImg} style={styles.ocr}></Image>
        </View>
        <Divider style={styles.header} type={'strike'}>Current Insurance Plan</Divider>
        <View style={{textAlign: 'left', alignSelf: 'flex-start'}}>
          <Text style={styles.plan}>SUPER GOOD HEALTH MEDICAL PLAN 2</Text>
          <Text style={styles.description}>Medical Protection</Text>
        </View>
        <Divider />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 30
  },
  header: {
    color: Colors.headerColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    marginTop: 20,
    width: 150,
    height: 150,
  },
  ocr: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 0,
    right: 90,
    marginTop: 20,
  },
  plan: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.tintColor
  },
  description: {
    fontSize: 14,
    color: '#d3d3d3',
  }
});

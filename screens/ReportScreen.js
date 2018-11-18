import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import Divider from '../components/Divider';
import IconBlockView from '../components/IconBlockView';
import {Button} from 'native-base';
import Colors from '../constants/Colors';
const userImg = require('../assets/images/user.png');
const ocrImg = require('../assets/images/ocr.png');
const tickImg = require('../assets/images/green-tick.png');
const crossImg = require('../assets/images/red-cross.png');

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    title: 'My Report',
    headerTintColor: Colors.tintColor,
  };

  render() {
    const coveredHealthIssues = [
      { title: 'High Cholesterol', icon: 'highCholesterol', cost: '$300,000 - 500,000', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since'},
      { title: 'Arthritis', icon: 'arthritis', cost: '$400,000 - 450,000', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since'},
      { title: 'Chronic Kidney Disease', icon: 'chronicKidney', cost: '$600,000 - 750,000', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since'},
      { title: 'Pulmonary Disease', icon: 'pulmonary', cost: '$500,000 - 650,000', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since'},
    ];

    const notCoveredHealthIssues = [
      { title: 'Ischemic Heart Disease', icon: 'heartDisease', cost: '$800,000 - 900,000', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since'},
      { title: 'High Blood Pressure', icon: 'bloodPressure', cost: '$650,000 - 700,000', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since'},
    ];

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
          <Text style={styles.plan_description}>Medical Protection</Text>
        </View>
        <Divider />
        <View style={{alignSelf: 'flex-start', flexDirection: 'row'}}>
          <Image style={{marginRight: 10, marginBottom: 10}} source={tickImg}></Image>
          <Text style={styles.cover_header}>Covered By Plan</Text>
        </View>
        { coveredHealthIssues.map((issue, i) => {
          return (
            <IconBlockView key={i} iconName={issue.icon}>
              <Text style={styles.issue_title}>{issue.title}</Text>
              <Text style={styles.issue_cost}>Medical Cost: {issue.cost}</Text>
              <Text style={styles.issue_description}>{issue.description}</Text>
            </IconBlockView>
          )
        })}
        <Divider />
        <View style={{alignSelf: 'flex-start', flexDirection: 'row'}}>
          <Image style={{marginRight: 10, marginBottom: 10}} source={crossImg}></Image>
          <Text style={styles.not_cover_header}>Not Covered By Plan</Text>
        </View>
        { notCoveredHealthIssues.map((issue, i) => {
          return (
            <IconBlockView key={i} iconName={issue.icon}>
              <Text style={styles.not_issue_title}>{issue.title}</Text>
              <Text style={styles.issue_cost}>Medical Cost: {issue.cost}</Text>
              <Text style={styles.issue_description}>{issue.description}</Text>
            </IconBlockView>
          )
        })}
        <View>
          <Button block rounded style={styles.button}>
            <Text style={styles.buttonText}>Upgrade My Plan</Text>
          </Button>
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
    paddingHorizontal: 30
  },
  header: {
    color: Colors.headerColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  },
  cover_header: {
    color: Colors.successColor,
    fontSize: 16,
    fontWeight: 'bold'
  },
  not_cover_header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.tintColor,
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
    color: Colors.tintColor,
    marginBottom: 5
  },
  plan_description: {
    fontSize: 14,
    color: '#5f5f5f',
  },
  issue_title: {
    fontSize: 17,
    color: Colors.successColor,
    fontWeight: 'bold'
  },
  issue_cost: {
    fontWeight: 'bold',
    marginBottom: 3
  },
  not_issue_title: {
    fontSize: 16,
    color: Colors.tintColor,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 15,
    backgroundColor: Colors.tintColor,
    width: 180,
    marginBottom: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

import React from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
const doctorImg = require('../assets/images/doctor.jpg');
import Colors from '../constants/Colors';
import { KeyboardAvoidingView } from 'react-native';

export default class DoctorAiScreen extends React.Component {
  static navigationOptions = {
    title: 'Doctor AI',
    headerTintColor: Colors.tintColor,
  };
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      count: 1,
    };
  }


  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: this.state.count,
          text: 'Welcome back, Mark! Do you want to start a symptom assessment?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Doctor AI',
            avatar: doctorImg,
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    console.log('hello', messages[0].text.includes('stomache'));
    console.log(this.state.count)
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    this.setState(previousState => ({
      count: previousState.count
    }))
    console.log(this.state.count)
    if (messages[0].text.includes('stomache')){

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: this.state.count + 1,
            text: 'Ongoing vomiting or diarrhea',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Doctor AI',
              avatar: doctorImg,
            },
          },
          {
            _id: this.state.count + 2,
            text: 'Blood when you have a bowel movement',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Doctor AI',
              avatar: doctorImg,
            },
          },
          {
            _id: this.state.count + 3,
            text: 'Unintended weight loss',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Doctor AI',
              avatar: doctorImg,
            },
          },
          {
            _id: this.state.count + 4,
            text: 'You are having stomach disorders three times in this month, you should go to a doctor if you have any of the followings',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Doctor AI',
              avatar: doctorImg,
            },
          },

        ],),
      }))
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} stylebehavior="padding" enabled>
        <GiftedChat
          bottomOffset={48}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
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
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
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
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
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
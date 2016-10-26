import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

export default class fivemin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    let currentDate = new Date();
    let currentTime = currentDate.getHours();
    console.log(currentTime);
    return (
      <View style={styles.container}>
          <ScrollView style={{flex: 1}}>
          <KeyboardAvoidingView behavior='padding'>
          <Image source={{uri: 'https://source.unsplash.com/user/firaskrichi/likes'}} resizeMode="cover" style={{width: 400, height: 350}} />
          <View style={styles.day}>
            <View style={styles.block}>
              <Text style={styles.text}>
                I am grateful for ...
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
            </View>
            <View style={styles.block}>

              <Text style={styles.text}>
                What will I do to make today great?
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
            </View>

            <View style={styles.block}>

              <Text style={styles.text}>
                Daily affirmations, I am ...
              </Text>

              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>

              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
            </View>

          </View>
          <View style={styles.night}>

            <View style={styles.block}>

              <Text style={styles.text}>
                3 Amazing things that happened today ...
              </Text>

              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
            </View>

            <View style={styles.block}>
              <Text style={styles.text}>
                How could I have made today even better?
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}/>
              </View>
            </View>

          </View>
        </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0,
  },
  card: {
    backgroundColor: 'yellow',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    color: '#333333',
    fontSize: 14,
  },
  inputText: {
    height: 35,
    fontSize: 14,
    color: '#333333',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  day: {
    backgroundColor: '#FFFEF9',
    padding: 5,
  },
  night: {
    backgroundColor: '#DFDFD5',
    padding: 5,
  },
  block: {
    marginBottom: 30,
  }

});

AppRegistry.registerComponent('fivemin', () => fivemin);

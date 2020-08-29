import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { onChange } from 'react-native-reanimated';

export default class WriteScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        author: "",
        title: "",
        text: "",
      }
    }

    render() {
      const authorName = this.state.author;
      const titleName = this.state.title;
      const textStory = this.state.text;

      return(

        <View style={styles.container}>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Author of the Story"
            value={this.state.author}
            onChangeText = {text => this.setState({author : text})}>
              </TextInput>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Title of the Story"
            value={this.state.title}
            onChangeText = {text => this.setState({title : text})}>
              </TextInput>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="The Story"
            value={this.state.text}
            multiline = {true} 
            onChangeText = {text => this.setState({text : text})}>
              </TextInput>
          </View>
          <View style={styles.inputView}>
          <TouchableOpacity>
            <Text style={styles.submitButton}> Submit </Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    submitButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    }
  });
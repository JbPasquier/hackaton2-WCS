/*jshint esversion: 6*/
'use strict';
import React, {
    TouchableHighlight,
    Text,
    Component,
    ScrollView,
    View
} from 'react-native';
import {
    Subheader
} from 'react-native-material-design';
class Welcome extends Component{
    constructor(props) {
        super(props)
    }
    navLogin(){
        this.props.navigator.push({
          id: 'login'
        })
    }
    navCapMe(){
      this.props.navigator.push({
        id: 'capme'
      })
    }
    navCapSomeone(){
      this.props.navigator.push({
        id: 'capsomeone'
      })
    }
  render() {
    return (
        <ScrollView>
            <Subheader text={"Welcome Screen"} />
            <View>
                <TouchableHighlight onPress={this.navCapMe.bind(this)}>
                    <Text>Navigate to capme screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navCapSomeone.bind(this)}>
                    <Text>Navigate to capsomeone screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navLogin.bind(this)}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
  }
};

module.exports = Welcome

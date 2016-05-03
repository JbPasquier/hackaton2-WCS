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
class CapSomeone extends Component{
    constructor(props) {
        super(props)
    }
    navLogin(){
        this.props.navigator.push({
          id: 'login'
        })
    }
    navWelcome(){
      this.props.navigator.push({
        id: 'welcome'
      })
    }
    navCapMe(){
      this.props.navigator.push({
        id: 'capme'
      })
    }
  render() {
    return (
        <ScrollView>
            <Subheader text={"CapSomeone Screen"} />
            <View>
                <TouchableHighlight onPress={this.navCapMe.bind(this)}>
                    <Text>Navigate to capme screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navWelcome.bind(this)}>
                    <Text>Navigate to welcome screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navLogin.bind(this)}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
  }
};

module.exports = CapSomeone

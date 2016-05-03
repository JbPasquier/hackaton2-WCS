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
class CapMe extends Component{
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
    navCapSomeone(){
      this.props.navigator.push({
        id: 'capsomeone'
      })
    }
  render() {
    return (
        <ScrollView>
            <Subheader text={"CapMe Screen"} />
            <View>
                <TouchableHighlight onPress={this.navCapSomeone.bind(this)}>
                    <Text>Navigate to capsomeone screen</Text>
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

module.exports = CapMe

/*jshint esversion: 6*/
'use strict';
import React, {
    TouchableHighlight,
    Text,
    Component,
    View
} from 'react-native';
class Second extends Component{
    constructor(props) {
        super(props)
    }
  navFirst(){
    this.props.navigator.push({
      id: 'first'
    })
  }
    navHack(){
      this.props.navigator.push({
        id: 'login'
      })
    }
  render() {
    return (
        <View>
            <TouchableHighlight onPress={this.navFirst.bind(this)}>
                <Text>Navigate to first screen</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.navHack.bind(this)}>
                <Text>Navigate to hackaton screen</Text>
            </TouchableHighlight>
        </View>
    );
  }
};

module.exports = Second

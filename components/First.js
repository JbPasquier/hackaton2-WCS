/*jshint esversion: 6*/
'use strict';
import React, {
    TouchableHighlight,
    Text,
    Component,
    View
} from 'react-native';
class First extends Component{
    constructor(props) {
        super(props)
    }
  navSecond(){
    this.props.navigator.push({
      id: 'second'
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
            <TouchableHighlight onPress={this.navSecond.bind(this)}>
                <Text>Navigate to second screen</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.navHack.bind(this)}>
                <Text>Navigate to hackaton screen</Text>
            </TouchableHighlight>
        </View>
    );
  }
};

module.exports = First

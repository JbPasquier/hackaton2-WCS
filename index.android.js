/*jshint esversion: 6*/
'use strict';
import React, {
    BackAndroid,
    Navigator,
    Component,
    AppRegistry
} from 'react-native';

import Login from './components/Login.js'
import Welcome from './components/Welcome.js'
import CapSomeone from './components/CapSomeone.js'
import CapMe from './components/CapMe.js'

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

class Navigation extends Component{
    render() {
        return (
            <Navigator
            initialRoute={{id: 'login'}}
            renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {

        _navigator = navigator;

        switch (route.id) {
            case 'login':
                return (<Login navigator={navigator} title="login"/>);
            case 'welcome':
                return (<Welcome navigator={navigator} title="welcome" />);
            case 'capsomeone':
                return (<CapSomeone navigator={navigator} title="capsomeone" />);
            case 'capme':
                return (<CapMe navigator={navigator} title="capme" />);
        }

    }
};
AppRegistry.registerComponent('hackaton2', () => Navigation);

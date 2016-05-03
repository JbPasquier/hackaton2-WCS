/*jshint esversion: 6*/
'use strict';
import React, {
    BackAndroid,
    Navigator,
    Component,
    AppRegistry
} from 'react-native';

import First from './components/First.js'
import Second from './components/Second.js'
import Hackaton2 from './components/Hackaton2.js'

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
            initialRoute={{id: 'first'}}
            renderScene={this.navigatorRenderScene}/>
        );
    }

    navigatorRenderScene(route, navigator) {

        _navigator = navigator;

        switch (route.id) {
            case 'first':
                return (<First navigator={navigator} title="first"/>);
            case 'second':
                return (<Second navigator={navigator} title="second" />);
            case 'login':
                return (<Hackaton2 navigator={navigator} title="login" />);
        }

    }
};
AppRegistry.registerComponent('hackaton2', () => Navigation);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/*jshint esversion: 6*/
'use strict';
var React = require('react-native');
var styles = React.StyleSheet.create({
    parent: {
        backgroundColor: '#26569e'
    }
});
var Hackaton2 = React.createClass({
    render: function() {
        var layout =
        <React.View style = {styles.background} >
            <React.Text >
                Bonjour
            </React.Text>
        </React.View>;
        return layout;
    }
});
React.AppRegistry.registerComponent('hackaton2', () => Hackaton2);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/*jshint esversion: 6*/
'use strict';
var React = require('react-native');
var styles = React.StyleSheet.create({
    main: {
        backgroundColor: '#26569e',
        flex: 1,
        alignItems:'center',
        paddingTop: 15
    },
    logo: {
        flex: 1
    },
    text: {
        marginTop: 40,
        color: 'white',
        fontSize: 20
    },
    bold: {
        fontWeight: "900"
    }
});
var Hackaton2 = React.createClass({
    render: function() {
        var layout =
        <React.View style = {styles.main} >
            <React.Image source={require('./assets/logo.png')} />
            <React.Text style = {styles.text}>
                Hello, <React.Text style = {styles.bold}>Jeremy W. Bush</React.Text>
            </React.Text>
        </React.View>;
        return layout;
    }
});
React.AppRegistry.registerComponent('hackaton2', () => Hackaton2);

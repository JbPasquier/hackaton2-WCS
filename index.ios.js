/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
 var React = require('react-native');
 var Hackaton2 = React.createClass({
     render: function() {
        var layout =
            <React.View >

              <React.Image style={styles.toto}
                source={require('./assets/logo.png')}
              />
                <React.Text>
                    Bonjour
                </React.Text>

            </React.View>
        ;
        return layout;
    }
 });
 var styles = React.StyleSheet.create({
   toto: { backgroundColor : '#26569e',
   textAlign : 'center',

   }
 });
 React.AppRegistry.registerComponent('hackaton2', () => Hackaton2);

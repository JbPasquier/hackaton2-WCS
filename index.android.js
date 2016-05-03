/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Hackaton2 = React.createClass({
    render: function() {
       var layout =
           <React.View >

               <React.Text>
                   Bonjour
               </React.Text>

           </React.View>
       ;
       return layout;
   }
});
var styles = React.StyleSheet.create({

});
React.AppRegistry.registerComponent('hackaton2', () => Hackaton2);

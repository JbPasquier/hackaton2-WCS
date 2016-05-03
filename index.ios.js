/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
 import React, { Component, Text, View, AppRegistry, Image, StyleSheet, TextInput } from 'react-native';
 class Hackaton2 extends Component{
     render() {
       return (
            <View style={styles.page} >

              <Image
                source={require('./assets/logo.png')}
              />

              <Image style={styles.icon}
                source={require('./assets/jerem.png')}
              />
                <Text>
                    Bonjour
                </Text>

                <TextInput style={styles.TextInputplz} placeholder = {'moi'}/>

            </View>
        );
    }
 };
 const styles = StyleSheet.create({
   page: {
     flex : 1,
     alignItems: 'center',
     paddingTop : 20,
     backgroundColor : '#26569e',
   },
   icon:{
     borderRadius: 100,
     width : 200,
     height : 267,
     marginTop : 30,
   },
   TextInputplz : {
     backgroundColor : 'white',
   }
 });
 AppRegistry.registerComponent('hackaton2', () => Hackaton2);

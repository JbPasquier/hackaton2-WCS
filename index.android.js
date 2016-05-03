/*jshint esversion: 6*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component, Text, View, AppRegistry, Image, StyleSheet, TextInput } from 'react-native';
import { Button, Card } from 'react-native-material-design';
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#26569e',
        flex: 1,
        alignItems:'center',
        paddingTop: 20
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
    },
    imageProfil: {
        borderRadius: 40,
        width:200,
        height:200
    },
    logMeIn: {
        flex:1,
        backgroundColor: '#ff0000',
        height: 100
    }
});
class Hackaton2 extends Component {
    render() {
        return (
            <View style = {styles.main} >
                <Image source={require('./assets/logo.png')}></Image>
                <Text style = {styles.text}>
                    <Image source={require('./assets/jeremy.jpg')} style={styles.imageProfil}></Image>
                    {"\n"}
                    Hello, <Text style = {styles.bold}>Jeremy W. Bush</Text>
                    {"\n"}
                </Text>
                <Text style={styles.bold, styles.text}>
                    Confirmez votre mot de passe
                    {"\n"}
                </Text>
                <TextInput style = {{backgroundColor:"#ffffff"}} secureTextEntry={true} placeholder={"Mot de passe..."} />
                <Button value="T'es cap ?" />
            </View>
        );
    }
};
AppRegistry.registerComponent('hackaton2', () => Hackaton2);

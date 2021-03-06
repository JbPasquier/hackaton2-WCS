/*jshint esversion: 6*/
'use strict';
import React, {
    BackAndroid,
    TouchableHighlight,
    Navigator,
    Component,
    ScrollView,
    Text,
    View,
    AppRegistry,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';
import {
    Toolbar,
    Subheader,
    PRIMARY_COLORS,
    COLOR,
    Button,
    Card,
    Avatar
} from 'react-native-material-design';
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#26569e',
        flex: 1,
        alignItems:'center',
        paddingTop: 10
    },
    text: {
        marginTop: 20,
        color: 'white',
        fontSize: 20
    },
    bold: {
        fontWeight: "900"
    },
    logMeIn: {
        flex:1,
        backgroundColor: '#ff0000',
        height: 100
    },
    pub: {
        height: 50,
        backgroundColor: "pink"
    },
    avatarContainer: {
        marginTop:40
    },
    small: {
        fontSize: 14,
        color: 'white'
    }
});
class Profile extends Component{
    constructor(props) {
        super(props)
    }
    navWelcome(){
      this.props.navigator.push({
        id: 'welcome'
      })
    }
  render() {
    return (
        <ScrollView style = {{backgroundColor: '#26569e'}}>
            <View style = {[styles.pub,{flexDirection:'row',flexWrap:'nowrap'}]}>
                <Image source={require('../assets/caroline.jpg')} style = {{height:50,width:50,justifyContent:'flex-start',marginLeft:50}}></Image>
                <Text style={{justifyContent:'flex-end',marginLeft:30}}>PUB{"\n"}Rencontrez l'âme soeur{"\n"}PQR.fr - Votre site de rencontre</Text>
            </View>
            <View style = {styles.main} />
            <View style = {styles.main}>
                <Image source={require('../assets/logo.png')}></Image>
            </View>
            <View style = {styles.main}>
                <Text style = {[styles.text, styles.small]}>Tu as défié 8 capt'Ûeurs{"\n"}9 capt'Ûeurs t'ont défié, tu en as remporté 7.</Text>
            </View>
            <View style = {styles.main}>
                <Image source={require('../assets/unicorn.gif')}></Image>
            </View>
            <View>
                <TouchableHighlight onPress={this.navWelcome.bind(this)}>
                    <Text>Navigate to welcome screen</Text>
                </TouchableHighlight>
            </View>
      </ScrollView>
    );
  }
};

module.exports = Profile

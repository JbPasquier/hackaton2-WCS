/*jshint esversion: 6*/
'use strict';
import React, {
    TouchableHighlight,
    Text,
    Component,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    View
} from 'react-native';
import {
    Subheader,
    Button,
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
    avatarContainer: {
        marginTop:40
    },
    pub: {
        height: 50,
        backgroundColor: "pink"
    },
    small: {
        fontSize: 14,
        color: 'white'
    },
    gimmeAnHRBaby: {
        borderBottomColor: "black",
        borderBottomWidth: 1
    },
    home: {
      backgroundColor: "#ecf0f1",
      marginBottom: 10,
      padding: 5,
    }
});
class CapSomeone extends Component{
    constructor(props) {
        super(props)
    }
    navLogin(){
        this.props.navigator.push({
          id: 'login'
        })
    }
    navWelcome(){
      this.props.navigator.push({
        id: 'welcome'
      })
    }
    navCapMe(){
      this.props.navigator.push({
        id: 'capme'
      })
    }
    navModal(){
      this.props.navigator.push({
        id: 'modal'
      })
    }
  render() {
    return (
        <ScrollView style = {{backgroundColor: '#26569e'}}>
            <View style = {[styles.pub,{flexDirection:'row',flexWrap:'nowrap'}]}>
                <Image source={require('../assets/caroline.jpg')} style = {{height:50,width:50,justifyContent:'flex-start',marginLeft:50}}></Image>
                <Text style={{justifyContent:'flex-end',marginLeft:30}}>PUB{"\n"}Rencontrez l'âme soeur{"\n"}PQR.fr - Votre site de rencontre</Text>
            </View>
            <Subheader text={"CapSomeone Screen"} />
            <View style = {[styles.main, styles.gimmeAnHRBaby]}>
                <View style = {[styles.main,styles.home]}>
                  <View style={{flexDirection:'row',flexWrap:'nowrap'}}>
                    <Avatar style={{justifyContent: 'flex-start'}} size={80} image={<Image source={require('../assets/thomas.jpg')}></Image>} />
                    <Text style={{justifyContent: 'flex-end',marginLeft:40,marginRight:100}}>Défier Thomas</Text>
                  </View>
                  <Text>Défie les capt`Ûeurs locaux</Text>
                  <Text>Gagne des points et c'est cool</Text>
                </View>

            </View>
            <View style = {styles.main}>
                <Text style = {styles.main}>Quel sera son défi ?</Text>
                <TextInput style = {[styles.main,{height: 150, backgroundColor:"#ffffff"}]} multiline = {true} placeholder={"Quel sera son défi ...?"} />
                <Button style={{marginLeft:50}} raised = {true} primary = {"paperDeepOrange"} text = {"Défier"} theme = {"dark"} onPress={this.navWelcome.bind(this)} />
            </View>
            <View>
                <TouchableHighlight onPress={this.navCapMe.bind(this)}>
                    <Text>Navigate to capme screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navWelcome.bind(this)}>
                    <Text>Navigate to welcome screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navLogin.bind(this)}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navModal.bind(this)}>
                    <Text>Modal screen</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
  }
};

module.exports = CapSomeone

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
    }
});

class Login extends Component {
    constructor(props) {
        super(props)
    }
    navCapMe(){
      this.props.navigator.push({
        id: 'capme'
      })
    }
    navCapSomeone(){
      this.props.navigator.push({
        id: 'capsomeone'
      })
    }
    navWelcome(){
      this.props.navigator.push({
        id: 'welcome'
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
                <View style = {styles.main} />
                <View style = {styles.main}>
                    <Image source={require('../assets/logo.png')}></Image>
                </View>
                <View style = {[styles.main, styles.avatarContainer]}>
                    <Avatar size={120} image={<Image source={require('../assets/jeremy.jpg')}></Image>} />
                </View>
                <View style = {styles.main}>
                    <Text style = {styles.text}>
                        {"\n"}
                        Hello, <Text style = {styles.bold}>Jeremy W. Bush</Text>
                        {"\n"}
                    </Text>
                </View>
                <View style = {styles.main}>
                    <Text style={[styles.bold, styles.text, styles.small]}>
                        Confirmes-ton mot de passe
                        {"\n"}
                    </Text>
                </View>
                <View style = {styles.main}>
                    <TextInput style = {{backgroundColor:"#ffffff"}} secureTextEntry={true} placeholder={"Mot de passe..."} />
                    <Button raised = {true} primary = {"paperDeepOrange"} text = {"T\'es cap ?"} theme = {"dark"} onPress={this.navWelcome.bind(this)} />
                </View>
                <View style = {styles.main}>
                    <Text style = {styles.text}>{"\n"}Tu n'es pas Jeremy W. Bush ?</Text>
                </View>
            </ScrollView>
        );
    }
};

module.exports = Login

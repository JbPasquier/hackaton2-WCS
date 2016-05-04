/*jshint esversion: 6*/
'use strict';
import React, {
    TouchableHighlight,
    Text,
    Component,
    ScrollView,
    StyleSheet,
    Image,
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
    small: {
        fontSize: 14,
        color: 'white'
    },
    gimmeAnHRBaby: {
        borderBottomColor: "black",
        borderBottomWidth: 1
    }
});
class Welcome extends Component{
    constructor(props) {
        super(props)
    }
    navLogin(){
        this.props.navigator.push({
          id: 'login'
        })
    }
    navProfile(){
        this.props.navigator.push({
          id: 'profile'
        })
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
  render() {
    return (
        <ScrollView style = {{backgroundColor: '#26569e'}}>
            <View style = {styles.main} />
            <View style = {styles.main}>
                <Image source={require('../assets/logo.png')}></Image>
            </View>
            <View style = {[styles.main, styles.gimmeAnHRBaby]}>
                <Subheader text={"Bienvenue sur capt`Û"} />
            </View>
            <View style = {[styles.main, styles.gimmeAnHRBaby]}>
                <View style = {[styles.main,{flexDirection:'row',flexWrap:'nowrap'}]}>
                    <Avatar style={{justifyContent: 'flex-start'}} size={80} image={<Image source={require('../assets/jeremy.jpg')}></Image>} />
                    <Text style={{justifyContent: 'flex-end',marginLeft:40,marginRight:100}}>Hello Jeremy</Text>
                </View>
                <Text>Défie les capt`Ûeurs locaux</Text>
                <Text>Gagne des points et c'est cool</Text>
            </View>
            <View style = {[styles.main, styles.gimmeAnHRBaby]}>
                <View style = {[styles.main,{flexDirection:'row',flexWrap:'nowrap'}]}>
                    <Avatar style={{justifyContent: 'flex-start'}} size={40} image={<Image source={require('../assets/iban.jpg')}></Image>} />
                    <Text style={{justifyContent: 'flex-end',marginLeft:20,marginRight:50}}>Iban{"\n"}2m - La Loupe</Text>
                    <Button style={{justifyContent: 'flex-end',marginLeft:50}} raised = {true} primary = {"paperDeepOrange"} text = {"capt`Ŷ"} theme = {"dark"} onPress={this.navCapSomeone.bind(this)} />
                </View>
                <View style = {[styles.main,{flexDirection:'row',flexWrap:'nowrap'}]}>
                    <Avatar style={{justifyContent: 'flex-start'}} size={40} image={<Image source={require('../assets/mauricio.jpg')}></Image>} />
                    <Text style={{justifyContent: 'flex-end',marginLeft:20,marginRight:50}}>Mauricio{"\n"}4m - La Loupe</Text>
                    <Button style={{justifyContent: 'flex-end',marginLeft:50}} raised = {true} primary = {"paperDeepOrange"} text = {"capt`Ŷ"} theme = {"dark"} onPress={this.navCapSomeone.bind(this)} />
                </View>
                <View style = {[styles.main,{flexDirection:'row',flexWrap:'nowrap'}]}>
                    <Avatar style={{justifyContent: 'flex-start'}} size={40} image={<Image source={require('../assets/jb.jpg')}></Image>} />
                    <Text style={{justifyContent: 'flex-end',marginLeft:20,marginRight:50}}>Jean-Baptiste{"\n"}8m - La Loupe</Text>
                    <Button style={{justifyContent: 'flex-end',marginLeft:50}} raised = {true} primary = {"paperDeepOrange"} text = {"capt`Ŷ"} theme = {"dark"} onPress={this.navCapSomeone.bind(this)} />
                </View>
                <View style = {[styles.main,{flexDirection:'row',flexWrap:'nowrap'}]}>
                    <Avatar style={{justifyContent: 'flex-start'}} size={40} image={<Image source={require('../assets/thomas.jpg')}></Image>} />
                    <Text style={{justifyContent: 'flex-end',marginLeft:20,marginRight:30}}>Thomas{"\n"}384000 km - Lune</Text>
                    <Button style={{justifyContent: 'flex-end',marginLeft:50}} raised = {true} primary = {"paperDeepOrange"} text = {"capt`Ŷ"} theme = {"dark"} onPress={this.navCapSomeone.bind(this)} />
                </View>
            </View>
            <View style = {styles.main}>
                <TouchableHighlight onPress={this.navCapMe.bind(this)}>
                    <Text>Navigate to capme screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navCapSomeone.bind(this)}>
                    <Text>Navigate to capsomeone screen</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.navLogin.bind(this)}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
  }
};

module.exports = Welcome

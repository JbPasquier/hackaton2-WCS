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
                    <Text style={{justifyContent: 'flex-end',marginLeft:40,marginRight:100}}>Jeremy W. Bush</Text>
                </View>
            </View>

            <View>
                <TouchableHighlight onPress={this.navWelcome.bind(this)}>
                    <Text>Navigate to login screen</Text>
                </TouchableHighlight>
            </View>
      </ScrollView>
    );
  }
};

module.exports = Profile

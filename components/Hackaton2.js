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

class Hackaton2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style = {{backgroundColor: '#26569e'}}>
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
                    <Button raised = {true} primary = {"paperDeepOrange"} text = {"T\'es cap ?"} theme = {"dark"}/>
                </View>
                <View style = {styles.main}>
                    <Text style = {styles.text}>{"\n"}Tu n'es pas Jeremy W. Bush ?</Text>
                </View>
            </ScrollView>
        );
    }
};

module.exports = Hackaton2

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
        flex: 1,
        alignItems:'center',
        paddingTop: 10
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginBottom: 20,
    },
    bold: {
        fontWeight: "900"
    },
    avatarContainer: {
        marginTop:40
    },
    home: {
      backgroundColor: "#ecf0f1",
      marginBottom: 10,
      marginTop: 30,
      padding: 15
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
class DefiAccept extends Component{
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <ScrollView style = {{backgroundColor: '#26569e'}}>
          <View style = {[styles.pub,{flexDirection:'row',flexWrap:'nowrap'}]}>
              <Image source={require('../assets/caroline.jpg')} style = {{height:50,width:50,justifyContent:'flex-start',marginLeft:50}}></Image>
              <Text style={{justifyContent:'flex-end',marginLeft:30}}>PUB{"\n"}Rencontrez l'âme soeur{"\n"}PQR.fr - Votre site de rencontre</Text>
          </View>
          <View style = {styles.main}>
              <Image source={require('../assets/logo.png')}></Image>
          </View>
          <View style = {[styles.main,styles.home]}>

            <Text style = {[styles.bold, styles.text]}>Vous avez accepté le défi !</Text>

          <View style ={{flexDirection:'row',flexWrap:'nowrap',flex:1}}>
              <Avatar size={120} style={{justifyContent: 'flex-start'}} image={<Image source={require('../assets/mauricio.jpg')}></Image>} />
              <Text style = {[styles.bold, styles.text]}>VS</Text>
              <Avatar size={120} style={{justifyContent: 'flex-start'}} image={<Image source={require('../assets/jeremy.jpg')}></Image>} />
          </View>
          </View>


      </ScrollView>
    );
  }
};

module.exports = DefiAccept

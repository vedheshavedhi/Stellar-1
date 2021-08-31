import React, {Component} from 'react';
import {
Text,
View,
StyleSheet,
StatusBar,
Platform,
SafeAreaView,
TouchableOpacity,
ImageBackground,
Image
} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View
              style={styles.container}>
              <SafeAreaView style={styles.safeArea}/>

              <ImageBackground source={require('../assets/stars.gif')}
              style={styles.backgroundImage}>

            

             <View style={styles.titleBar}>
             <Text style={styles.titleText}>
             Stellar App
             </Text>
             
             </View>

             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate("SpaceCraft")}
             style={styles.routeCard}>
              <Text style={styles.routeText}>
              SpaceCraft
              </Text>
              <Text style={styles.knowMore}>
               {"Know More --->"}
                 </Text>
                 <Text style={styles.bgDigit}>
                 1
                 </Text>
                 <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
              </TouchableOpacity>

             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate("StarMap")}
             style={styles.routeCard}>
                 <Text style={styles.routeText}>
                     StarMap
                 </Text>
                 <Text style={styles.knowMore}>
               {"Know More --->"}
                 </Text>
                 <Text style={styles.bgDigit}>
                 2
                 </Text>
                 <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
              
             </TouchableOpacity>

             <TouchableOpacity 
             onPress={()=>this.props.navigation.navigate("DailyPic")}
             style={styles.routeCard}>
                 <Text style={styles.routeText}>
                     DailyPic
                 </Text>
                 <Text style={styles.knowMore}>{"KnowMore --->"}
                 </Text>
                 <Text style={styles.bgDigit}>
                     3
                 </Text>
                 <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>

             </TouchableOpacity>

             </ImageBackground>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    
      },
      safeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight:0
      },
      titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
      },
      titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:"white"
      },
      routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
      },
      routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30
      },
      backgroundImage:{
        flex:1,
        resizeMode:'cover'
      },
      knowMore:{
        paddingLeft:30,
        color:"blue",
        fontSize:15
      },
      bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:5,
        bottom:-15,
        index:-1
      },
      iconImage:{
        position:"absolute",
        height:100,
        width:100,
        resizeMode:"contain",
        right:70,
        top:-80
      }
})
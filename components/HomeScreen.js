import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const HomeScreen = ({navigation}) => {
  return (<View>
    <View style={{ padding: 40 }}>
      <Text>Start your learning journey here! </Text>
    </View>
    <View style={{ padding: 20, alignItems: "center" }}>
      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('LanguageChooser')}>
        <Text style={style.text}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={style.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  </View>)
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      aspectRatio: 1.5
    },
    image: {
      resizeMode: 'cover',
      width: 150,
      height: 150,
      borderRadius: 100,
      margin: 20
    },
    textinput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 300
    },
    button: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#18216E",
    },
    text: {
      color: "white"
    }
  })
export default HomeScreen;


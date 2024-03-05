import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SettingsScreen = ({navigation}) => {
    return (<View>
      <Text>Hi, this is the settings page. You can edit the volume and notifications here.</Text>
    </View>)
  }
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
export default SettingsScreen;


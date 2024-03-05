import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable} from 'react-native';

const LoadingSet1Screen = ({ navigation }) => {
  // Components: Synopsis, Start Button
  return (
  <View style={style.container}>
    <Text style={style.text}>Synopsis: To get you to learn more about Bangwa culture, your parents
    have enrolled you in weekend classes to learn Nweh, the language of the
    Bangwa people. It's your first day at Nweh Academy, and you've just
    seen a new face! However, the classes require you to speak Nweh everywhere
    for accelerated learning. Let's see how the 10 minutes of reading you 
    did yesterday help...
    </Text>
    <View style={style.container}>
    <Button 
      title="Play"
      color="#18216E"
      onPress={() => navigation.navigate('Set1')}
    />
    </View>
  </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#FFFFFF",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
  },
  button: {
    backgroundColor: "#18216E",
    fontSize: 16,
    color: "FFFFFF"
  },
})
export default LoadingSet1Screen;


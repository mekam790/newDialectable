import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import TrackPlayer from 'react-native-track-player';
// The player is ready to be used

const Set1Screen = ({ navigation }) => {
  const playSound = async () => {
    //const [Points, setPoints] = useState(0);
    await TrackPlayer.setupPlayer();
    
    await TrackPlayer.add({
      id: 'greetings1',
      url: require('/Users/makem/Dialectable/assets/bye.mp3'),
      title: 'bye',
      artist: 'dad'
  });

  // Start playing it
    await TrackPlayer.play();
  }
  return (
    <View style={styles.container}>
      <Text>{Points}</Text>
      <Text>A` lεε lε`.</Text>
      <View>
        <Text>How do you respond?</Text>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'red' : 'white' }]}
          onPress={() => playSound()}
        >
          {({ pressed }) => (
            <Text style={[styles.buttontext, { color: pressed ? 'white' : 'black' }]}>
              Ò-o.
            </Text>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'red' : 'white' }]}
          //onPress={() => setPoints(Points - 1)}
        >
          {({ pressed }) => (
            <Text style={[styles.buttontext, { color: pressed ? 'white' : 'black' }]}>
              A cε` a c၁`.
            </Text>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'green' : 'white' }]}
          //onPress={() => setPoints(Points + 1)}
        >
          {({ pressed }) => (
            <Text style={[styles.buttontext, { color: pressed ? 'white' : 'black' }]}>
              Mm. À lεε lε.
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: "black"
  }
});

export default Set1Screen;

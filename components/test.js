import React, { useRef } from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import {Card, Title ,Paragraph } from "react-native-paper";

const Test = () => {
  const scrollViewRef = useRef(null);
  const targetComponentRef = useRef(null);

  const handleScrollToComponent = () => {
    if (scrollViewRef.current && targetComponentRef.current) {
      targetComponentRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ y, animated: true });
        }
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView ref={scrollViewRef}>
      <><Card style={style.container}>
            <Card.Content>
                <Title>Greetings</Title>
            </Card.Content>
            <Card.Cover src="/Users/makem/Dialectable/assets/greetings.png" />
            <Card.Content>
                <Paragraph>What do you say when you approach someone?</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button title="Play" onPress={() => navigation.navigate('LoadingSet1')}></Button>
            </Card.Actions>
        </Card>
    </>
        <View ref={targetComponentRef} style={{ height: 200, backgroundColor: 'red' }} />
        <><Card style={style.container}>
            <Card.Content>
                <Title>Greetings</Title>
            </Card.Content>
            <Card.Cover src="/Users/makem/Dialectable/assets/greetings.png" />
            <Card.Content>
                <Paragraph>What do you say when you approach someone?</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button title="Play" onPress={() => navigation.navigate('LoadingSet1')}></Button>
            </Card.Actions>
        </Card>
    </>
      </ScrollView>
      <Button title="Scroll To Component" onPress={handleScrollToComponent} />
    </View>
  );
};
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

export default Test;

import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 


const AllSetsScreen = ({navigation}) => {
    return (
    <><Card style={style.container}>
            <Card.Content>
                <Title>Greetings</Title>
            </Card.Content>
            <Card.Cover src="/Users/makem/DialectableApp/assets/greetings.png" />
            <Card.Content>
                <Paragraph>What do you say when you approach someone?</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => navigation.navigate('LoadingSet1')}>Play</Button>
            </Card.Actions>
        </Card>
    </>
    )
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
export default AllSetsScreen;


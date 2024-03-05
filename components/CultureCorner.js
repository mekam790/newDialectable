import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 

const CultureCorner = (navigation) => {
    return (
        <View>
            <Text>Welcome to the culture corner. The educational snippets
                will be displayed as cards with more information when you press.
            </Text>
            <><Card style={style.container}>
                <Card.Content>
                    <Title>Origins of The Bangwa People</Title>
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
        </View>
    );
}

const style = StyleSheet.create({

})


export default CultureCorner;
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MyText, MyButton } from './src/component/DefaultComponent'

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    const {
      container,
      button,
      image,
    } = styles;
    return (
      <View style={styles.container}>
        <MyText>Open up App.js to start working on your app!</MyText>
        <View style={{ height: 20 }} />
        <MyButton
          title={"Submit"}
          onPress={() => { alert("Hello") }}
        ><MyText>Submit</MyText></MyButton>
        <Image source={{ uri: "" }}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

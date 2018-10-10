import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MyText, MyButton } from '../../src/component/DefaultComponent'


console.disableYellowBox = true;

export default class Login extends React.Component {
  render() {
    const {
      container,
      button,
      image,
    } = styles;
    return (
      <View style={styles.container}>
        <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }} resizeMode={'contain'} style={image}></Image>
        <MyText>Login</MyText>
        <View style={{ height: 20 }} />
        <MyButton
          onPress={() => { alert("Hello") }}
        >
          <MyText>Submit</MyText>
        </MyButton>
        {/* <TextInput style={{ borderColor: 'lawngreen', padding: 5, borderWidth: 1 }} placeholder={'พิมพ์อะไรสักอย่างสิ'} placeholderTextColor={'lawngreen'} /> */}
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
  image: {
    height: 200,
    width: 200,
    borderColor: 'lawngreen',
  }

});

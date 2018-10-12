import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput,KeyboardAvoidingView } from 'react-native';
import { MyText, MyButton } from '../../src/component/DefaultComponent'
import {setLogin} from '../redux/actions/login'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return (
    {
      loginReducer: state.loginReducer
    })
};

const mapDispatchToProps = {
  setLogin
};



console.disableYellowBox = true;

class Login extends React.Component {

  constructor (props) {
    super(props);
    this.username = "";
    this.password = "";
  }
  

  login = () => {
    this.props.setLogin({username:"hello",password:"P@ssw0rd"})
    // this.props.navigation.push('Home');
  }

  render() {
    console.log(this.props)
    const {
      container,
      button,
      image,
      textInput
    } = styles;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }} resizeMode={'contain'} style={image}></Image>
        <View style={{ height: 40 }} />
        <TextInput style={textInput} placeholder={'Username'} placeholderTextColor={'#2E8B57'} onChangeText={(text) => this.username = text} />
        <View style={{ height: 20 }} />
        <TextInput style={textInput} secureTextEntry={true} placeholder={'Password'} placeholderTextColor={'#2E8B57'} onChangeText={(text) => this.password = text} />
        <View style={{ height: 20 }} />
        <MyButton
          onPress={() => { this.login() }}
        >
          <MyText>Submit</MyText>
        </MyButton>
        {/* <TextInput style={{ borderColor: 'lawngreen', padding: 5, borderWidth: 1 }} placeholder={'พิมพ์อะไรสักอย่างสิ'} placeholderTextColor={'lawngreen'} /> */}
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
  },
  textInput: {
    borderColor: 'lawngreen', 
    padding: 10, 
    borderWidth: 1,
    borderRadius:10,
    width:'70%',
    color:'lawngreen'
  }

});

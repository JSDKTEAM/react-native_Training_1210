import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'


export class MyText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Text style={[styles.text, this.props.style]}> {this.props.children} </Text>
        );
    }
}

export class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.button, this.props.style]}>
                {this.props.children}
            </ TouchableOpacity>
        );
    }
    
}



const styles = {
    text: {
        color: 'lawngreen',
        fontSize: 16,
    },
    button: {
        padding: 10,
        backgroundColor: 'transparent',
        borderColor: 'lawngreen',
        borderWidth: 2,
        borderRadius: 6,
    },
}

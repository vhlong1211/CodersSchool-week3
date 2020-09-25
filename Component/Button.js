import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {styles} from '../App.js';
export default class Button extends React.Component{
    
    render(){
        return(
            <View>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.props.onPress(this.props.name)}
            >
            <Text style={styles.buttonText}>
              {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
            </Text>
          </TouchableOpacity>
            </View>
        )
    }
}
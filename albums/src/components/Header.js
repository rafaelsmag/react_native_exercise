//importar biblioteca para fazer o componente
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//Fazer o componente
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
};
//Fazer o componente ficar diponivel para o app
export default class Header extends Component { 
    render() {
        const { textStyle, viewStyle } = styles;
        
        return (
            <View style={viewStyle}>
            <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

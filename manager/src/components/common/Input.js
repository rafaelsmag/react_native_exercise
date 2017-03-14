import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}  
				autoCorrect={false}
				placeholder={placeholder}
				style={inputStyle}
				value={value} 
				onChangeText={onChangeText} 
			/>
		</View>
		);
};

const styles = {
	inputStyle: {
		color: '#000',
		marginRight: '3%',
		marginLeft: '3%',
		paddingLeft: '2%',
		paddingRight: '2%',		
		flex: 1
	},
	labelStyle: {
		fontSize: 14,
		paddingLeft: '5%',
		flex: 1,
		color: '#009688'
	},
	containerStyle: {
		height: 55,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
};

export { Input };

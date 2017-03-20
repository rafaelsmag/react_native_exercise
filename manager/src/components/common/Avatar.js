import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class Avatar extends Component {
    render() {
        const { name, description, source, size } = this.props;
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: '3%' }}>
                    <Image
                        style={{ height: size, width: size, borderRadius: size / 2 }}
                        source={{ uri: source }}
                    />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                    <Text style={{ fontSize: 14 }}>{description}</Text>
                </View>
            </View>
        );
    }
}

export { Avatar };

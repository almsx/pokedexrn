import React from 'react';
import { View, Text } from 'react-native';

export default function PokemonInfo(props) {
    return (
        <View style={props.style}>
            <Text style={props.titleStyle}>{props.title}</Text>
            <Text style={props.valueStyle}>{props.value}</Text>
        </View>
    )
}
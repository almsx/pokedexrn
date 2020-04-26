import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default ButtonNav = ({ styleBtn, styleTxt, action, text }) => {
    return (
        <TouchableOpacity onPress={action}>
            <View style={styleBtn}>
                <Text style={styleTxt}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
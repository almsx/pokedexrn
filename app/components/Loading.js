import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';
import styles from './styles/Loading.styles';
import { Colors } from '../utils/';

export default function Loading(props) {
    const { isVisible, text } = props;

    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0, 0, 0, .5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color={Colors.redApp} />
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    );
}
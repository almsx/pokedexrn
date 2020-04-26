import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import styles from './styles/ImageContainer.styles';
import { Colors } from '../utils/';

export default ImageContainer = ({ source, children, barStyle }) => {
    return (
        <>
            <StatusBar backgroundColor={Colors.colorHeader} barStyle={barStyle} />
            <ImageBackground
                source={source}
                style={styles.backImg}
            >
                {children}
            </ImageBackground>
        </>
    )
}

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles/PokemonAvatar.styles';

export default function PokemonAvar(props) {
    return (
        <TouchableOpacity onPress={props.action}>
            <Image
                source={props.avatar}
                style={styles.pokeball}
            />
        </TouchableOpacity>
    )
};
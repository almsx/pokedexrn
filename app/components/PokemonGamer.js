import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/PokemonGamer.styles';
import ButtonNav from './ButtonNav';

export default PokemonGamer = ({ image, name, id, actionButton }) => {
    return (
        <View style={styles.viewPokemonGamer}>
            <View
                style={styles.headPokemonGamer}
            >
                <Text style={styles.instructions}>Selecciona Uno:</Text>
            </View>
            <View style={styles.bodyPokemonGamer}>
                <Image
                    style={styles.imagePokemonGamer}
                    source={image}
                    resizeMode='contain'
                />
                <View style={styles.info}>
                    <ButtonNav
                        text={name}
                        styleBtn={styles.buttonNav}
                        styleTxt={styles.textButton}
                        action={actionButton}
                    />
                </View>
            </View>
        </View>
    )
}
import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

import { Colors, LibraryFont } from '../../utils/';

module.exports = StyleSheet.create({
    viewPokemonGamer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: 'column'
    },
    pokeball: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        borderRadius: Dimensions.get('window').width * 0.09,
        backgroundColor: Colors.white,
        borderColor: Colors.black,
        borderWidth: 3
    },
    gamer: {
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').width * 0.10,
        borderRadius: Dimensions.get('window').width * 0.05,
        backgroundColor: Colors.blueApp
    }    
});
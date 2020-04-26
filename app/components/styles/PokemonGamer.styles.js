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
    instructions: {
        color: Colors.white,
        fontSize: LibraryFont.button,
        textAlign: 'center'
    },
    headPokemonGamer: {
        width: Dimensions.get('window').width,
        height: Platform.OS != 'android' ? Dimensions.get('window').height * 0.28 : Dimensions.get('window').height * 0.24,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    bodyPokemonGamer: {
        width: Dimensions.get('window').width,
        height: Platform.OS != 'android' ? Dimensions.get('window').height * 0.48 : Dimensions.get('window').height * 0.67,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    imagePokemonGamer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.7,
    },
    info: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        top: 20
    },
    buttonNav: {
        backgroundColor: Colors.btnApp,
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.12,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        top: 15
    },
    textButton: {
        color: Colors.white,
        fontSize: LibraryFont.button,
        textAlign: 'center'
    }
});
import {
    StyleSheet, 
    Dimensions,
    Platform
} from 'react-native';

import { Colors, LibraryFont } from '../../utils/';

module.exports = StyleSheet.create({
    headPokedex: {
        width: Dimensions.get('window').width,
        height: Platform.OS != 'android' ? Dimensions.get('window').height * 0.08: Dimensions.get('window').height * 0.07
    },
    gamerPokedex: {
        width: Dimensions.get('window').width,
        height: Platform.OS != 'android' ? Dimensions.get('window').height * 0.14: Dimensions.get('window').height * 0.18,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    bodyPokedex: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.45
    },
    again: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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
        fontSize: LibraryFont.h3,
        textAlign: 'center'
    }
});
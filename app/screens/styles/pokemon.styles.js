import {
    StyleSheet, 
    Dimensions,
    Platform
} from 'react-native';
import { Colors, LibraryFont } from '../../utils/';


module.exports = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
        alignContent: 'center',
        justifyContent: 'center'
    },
    back_img: {
        width: 20,
        height: 20,
        left: 10
    },
    pokemon: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.22,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    ballPokemon: {
        width: Dimensions.get('window').width * 0.30,
        height: Dimensions.get('window').width * 0.30,
        borderRadius: Dimensions.get('window').width * 0.15,
        backgroundColor: Colors.white,
        borderColor: Colors.blueApp,
        borderWidth: 3,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgPokemon: {
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20
    },
    name: {
        color: Colors.black,
        fontSize: LibraryFont.title,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    type: {
        color: Colors.white,
        fontSize: LibraryFont.h3,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.60,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionPokemon: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: Colors.white,
        alignContent: 'center',
        borderRadius: 30
    },
    rowPokemon: {
        width: Dimensions.get('window').width * 0.9,
        flexDirection: 'row',
        top: Dimensions.get('window').width * 0.02,
        alignContent: 'center',
        justifyContent: 'center'
    },
    fieldPokemon: {
        width: Dimensions.get('window').width * 0.44,
        height: Dimensions.get('window').width * 0.20,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pokemonProp: {
        color: Colors.blueApp,
        fontSize: LibraryFont.h3,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    pokemonValue: {
        color: Colors.black,
        fontSize: LibraryFont.h3,
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});
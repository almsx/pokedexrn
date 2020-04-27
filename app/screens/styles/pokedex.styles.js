import {
    StyleSheet, 
    Dimensions,
    Platform
} from 'react-native';

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
    }
});
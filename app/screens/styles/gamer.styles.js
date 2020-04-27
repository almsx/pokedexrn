import {
    StyleSheet, 
    Dimensions,
    Platform
} from 'react-native';

module.exports = StyleSheet.create({
    pageControl: {
        width: Dimensions.get('window').width,
        height: Platform.OS != 'android' ? Dimensions.get('window').height * 0.08: Dimensions.get('window').height * 0.07
    }
});
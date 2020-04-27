import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

import { Colors, LibraryFont } from '../../utils/';

module.exports = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: Colors.white,
        borderColor: Colors.redApp,
        borderWidth: 2,
        borderRadius: 10
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.redApp,
        textTransform: "uppercase",
        marginTop: 10
    }
});

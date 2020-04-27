import {
    Dimensions
} from 'react-native';

let ancho = Dimensions.get('window').width;
let alto = Dimensions.get('window').height;

let aux;
if (ancho > alto) {
    aux = alto;
    alto = ancho;
    ancho = aux;
};

const fontTitle = ancho * 0.070;
const fontButtons = ancho * 0.052;
const fontH1 = ancho * 0.048;
const fontH2 = ancho * 0.044;
const fontH3 = ancho * 0.038;

export const button = fontButtons;
export const title = fontTitle;
export const h1 = fontH1;
export const h2 = fontH2;
export const h3 = fontH3;
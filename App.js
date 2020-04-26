/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import NavPokedex from './app/navigation/navigationApp';

import { Colors } from './app/utils/';
import navBarColor from 'react-native-navigation-bar-color';

export default function App() {

  useEffect(() => {

    navBarColor(Colors.black);

  }, []);

  return (
    <NavPokedex />
  );

}
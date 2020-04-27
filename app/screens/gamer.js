import React, { useState } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PageControl from 'react-native-page-control';
import ImageContainer from '../components/ImageContainer';
import Images from '../utils/images';
import PokemonGamer from '../components/PokemonGamer';
import styles from './styles/gamer.styles';
import { Colors } from '../utils/';

export default function Gamer(props) {

    const { navigation } = props;
    const [gamer, setGamer] = useState(0);

    const styleBar = 'light-content';

    _onPageControlValueChange = (currentPage) => {
        this.scrollView.scrollResponderScrollTo({ x: this.state.width * currentPage, y: 0, animated: true });
    }

    _onScroll = ({ nativeEvent }) => {
        let currentPage = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        
        if (gamer !== currentPage) {
            setGamer(currentPage);
        }
    }

    openCam = async (gamer) => {
        const sel = gamer.toString();
        await AsyncStorage.setItem('POKEMON_GAMER', sel);
        navigation.navigate('Pokedex',{
            gamer
        })
    }

    return (
        <ImageContainer
            source={Images.backPokedex}
            barStyle={styleBar}
        >
            <ScrollView
                horizontal={true}
                onScroll={this._onScroll}
                pagingEnabled={true}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <PokemonGamer
                    image={Images.ash}
                    name={'Ash'}
                    actionButton={() => openCam(1)}
                />
                <PokemonGamer
                    image={Images.misty}
                    name={'Misty'}
                    actionButton={() => openCam(2)}
                />
                <PokemonGamer
                    image={Images.brook}
                    name={'Brook'}
                    actionButton={() => openCam(3)}
                />
            </ScrollView>
            <View style={styles.pageControl}>
                <PageControl
                    currentPage={gamer}
                    numberOfPages={3}
                    pageIndicatorTintColor={Colors.white}
                    currentPageIndicatorTintColor={Colors.blueApp}
                    indicatorStyle={{ borderRadius: 7, borderColor: Colors.blueApp, borderWidth: 2 }}
                    currentIndicatorStyle={{ borderRadius: 7, borderColor: Colors.blueApp, borderWidth: 2 }}
                    indicatorSize={{ width: 14, height: 14 }}
                    onValueChange={this._onPageControlValueChange}
                />
            </View>
        </ImageContainer>
    )
};
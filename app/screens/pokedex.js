import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ImageContainer from '../components/ImageContainer';
import Images from '../utils/images';
import styles from './styles/pokedex.styles';
import PokemonAvatar from '../components/PokemonAvatar';
import Loading from '../components/Loading';
import ButtonNav from '../components/ButtonNav';

export default function Pokedex(props) {

    const { navigation } = props;
    const styleBar = 'light-content';
    const [gamer, setGamer] = useState(0);
    const [scanner, setScanner] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [againScan, setAgainScan] = useState(false);

    useEffect(() => {

        getGamer = async () => {

            const gamer = await AsyncStorage.getItem('POKEMON_GAMER');
            switch (gamer) {
                case '1':
                    setGamer(Images.avatar_ash);
                    break;
                case '2':
                    setGamer(Images.avatar_misty);
                    break;
                case '3':
                    setGamer(Images.avatar_brook);
                    break;
                default:
                    setGamer(Images.avatar.ash);
                    break;
            }

        }
        getGamer();

    }, []);

    closePokedex = async () => {
        //ToDO
    }

    onSuccess = (e) => {
        setScanner(false);
        setIsLoading(true);
        searchPokemon(e.data);
        setAgainScan(true);
    }

    newScan = () => {
        setScanner(true);
        setAgainScan(false);
    }

    searchPokemon = async (pokemon) => {

        await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json())
            .then(response => {
                const pokemon = {
                    name: response.name,
                    type: response.types[0].type.name,
                    weight: response.weight,
                    height: response.height,
                    speed: response.stats[0].base_stat,
                    special_defense: response.stats[1].base_stat,
                    special_attack: response.stats[2].base_stat,
                    defense: response.stats[3].base_stat,
                    attack: response.stats[4].base_stat,
                    experience: response.base_experience,
                    id: response.id,
                    pic: `https://pokeres.bastionbot.org/images/pokemon/${response.id}.png`
                };

                setIsLoading(false);
                navigation.navigate('Pokemon', {
                    pokemon
                });
            });

    }

    return (
        <>
            <ImageContainer
                source={Images.backPokedex}
                barStyle={styleBar}
            >
                <View
                    style={styles.headPokedex}
                />
                <View
                    style={styles.gamerPokedex}
                >
                    <PokemonAvatar avatar={gamer} />
                </View>
                <View
                    style={styles.bodyPokedex}
                >
                    <QRCodeScanner
                        onRead={(e) => onSuccess(e)}
                        reactivate={scanner}
                        showMarker={Platform.OS != 'android' ? false : true}
                        cameraStyle={styles.camera}
                        topViewStyle={styles.zeroContainer}
                        bottomViewStyle={styles.zeroContainer}
                    />
                </View>
                {againScan &&
                    <View
                        style={styles.again}
                    >
                        <ButtonNav
                            text={'Escanear nuevamente'}
                            styleBtn={styles.buttonNav}
                            styleTxt={styles.textButton}
                            action={() => newScan()}
                        />
                    </View>
                }
            </ImageContainer>
            <Loading isVisible={isLoading} text={"Buscando Pokemon ..."} />
        </>
    )
};
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import { Colors } from '../utils/';
import styles from './styles/pokemon.styles';
import Images from '../utils/images';
import PokemonInfo from '../components/PokemonInfo';

export default function Pokemon(props) {

    const { navigation } = props;
    const pokemon = props.navigation.state.params.pokemon;
    const styleBar = 'light-content';

    back = () => {
        navigation.goBack(null);
    };

    return (
        <ViewContainer
            barStyle={styleBar}
            backgroundColor={Colors.redApp}
        >
            <View
                style={styles.header}
            >
                <TouchableOpacity onPress={() => back()}>
                    <Image
                        source={Images.back}
                        style={styles.back_img}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={styles.pokemon}
            >
                <View style={styles.ballPokemon}>
                    <Image
                        source={{ uri: pokemon.pic }}
                        style={styles.imgPokemon}
                    />

                </View>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.type}>{pokemon.id} - Pokemon {pokemon.type}</Text>

            </View>
            <View style={styles.body}>
                <ScrollView style={styles.descriptionPokemon}>
                    <View style={styles.rowPokemon}>
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Especie'}
                            value={pokemon.type}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Peso'}
                            value={pokemon.height +' Kg'}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                    </View>
                    <View style={styles.rowPokemon}>
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Altura'}
                            value={pokemon.weight + ' Cm'}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Velocidad'}
                            value={pokemon.speed}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                    </View>
                    <View style={styles.rowPokemon}>
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Ataque'}
                            value={pokemon.attack}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Defensa'}
                            value={pokemon.defense}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                    </View>
                    <View style={styles.rowPokemon}>
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Ataque Especial'}
                            value={pokemon.special_attack}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Defensa Especial'}
                            value={pokemon.special_defense}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                    </View>
                    <View style={styles.rowPokemon}>
                        <PokemonInfo
                            style={styles.fieldPokemon}
                            title={'Experiencia'}
                            value={pokemon.experience}
                            titleStyle={styles.pokemonProp}
                            valueStyle={styles.pokemonValue}
                        />
                    </View>

                   
                </ScrollView>
            </View>
        </ViewContainer>
    )
};
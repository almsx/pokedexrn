import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GamerScreen from '../screens/gamer';
import PokedexScreen from '../screens/pokedex';
import PokemonScreen from '../screens/pokemon';

const GamerStack = createStackNavigator(
    {
        Gamer: {
            screen: GamerScreen,
            navigationOptions: {
                headerShown: false,
                headerMode: false,
            },
        }
    },
    {
        initialRouteName: 'Gamer'
    }
);

const PokedexStack = createStackNavigator(
    {
        Pokedex: {
            screen: PokedexScreen,
            navigationOptions: {
                headerShown: false,
                headerMode: false,
            },
        },
        Pokemon: {
            screen: PokemonScreen,
            navigationOptions: {
                headerShown: false,
                headerMode: false,
            },
        }
    },
    {
        initialRouteName: 'Pokedex'
    }
);

const PokemonSwitchNavigator = createSwitchNavigator({
    GamerStack,
    PokedexStack
});

export default createAppContainer(PokemonSwitchNavigator);

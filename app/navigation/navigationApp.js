import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PokedexScreen from '../screens/pokedex';
import PokemonScreen from '../screens/pokemon';

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
        },
    },
    {
        initialRouteName: 'Pokedex'
    }
);

const GuestSwitchNavigator = createSwitchNavigator({
    PokedexStack
});

export default createAppContainer(GuestSwitchNavigator);

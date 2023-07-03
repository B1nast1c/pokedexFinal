import React from 'react';
import FavoritesComponent from './src/hooks/favoritesComponent';
import App from './App';
import { AppRegistry } from 'react-native';


const Context = () => { //Para que el Context FUNCIONE
    return (
        <FavoritesComponent>
            <App />
        </FavoritesComponent>
    );
}

AppRegistry.registerComponent('main', () => Context);

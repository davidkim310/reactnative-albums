//Index.ios.js - place code in here for IOS!!

//IMPORT A LIBRARY TO HELP CREATE A COMPONENT
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//CREATE A COMPONENT
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

//RENDER IT TO THE DEVICE
AppRegistry.registerComponent('albums', () => App)

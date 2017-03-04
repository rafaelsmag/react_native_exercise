//Importa a biblioteca para ajudar a criar um componente
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Cria um componente
const App = () => (
  <View style={{ flex: 1}}>
      <Header headerText={'Albums!'} />
      <AlbumList />
  </View>
);

//mostra no aplicativo
AppRegistry.registerComponent('albums', () => App);

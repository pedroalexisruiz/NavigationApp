import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LateralMenu} from './src/navigation/LateralMenu';

const App = () => {
  return (
    <NavigationContainer>
      <LateralMenu />
    </NavigationContainer>
  );
};

export default App;

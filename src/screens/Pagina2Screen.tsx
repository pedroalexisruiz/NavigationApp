import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({title: 'Hola Mundo', headerBackTitle: 'Atrás'});
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a página 3"
        onPress={() => navigation.navigate('Pagina 3', {})}
      />
    </View>
  );
};

export default Pagina2Screen;

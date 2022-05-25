import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';
import {colors} from '../theme/colors';

interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{marginLeft: 10}}>
          <Icon name="menu-outline" size={35} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina 2')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.personButton, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, name: 'Pedro'})
          }>
          <Icon name="man-outline" size={40} color="white" />
          <Text style={styles.personButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.personButton, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, name: 'Lina'})
          }>
          <Icon name="woman-outline" size={40} color="white" />
          <Text style={styles.personButtonText}>Lina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;

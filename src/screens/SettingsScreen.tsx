import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top}}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

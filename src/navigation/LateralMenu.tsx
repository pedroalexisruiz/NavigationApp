import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tabs} from './BottomTabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/colors';

const Drawer = createDrawerNavigator();

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*  Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/*  Menu options */}
      <View style={styles.menuOptionsContainer}>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuOptionText}>
            <Icon name="compass-outline" size={20} color="black" />
            Tabs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menuOptionText}>
            <Icon name="cog-outline" size={20} color="black" />
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export const LateralMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={MenuContent}
      screenOptions={{
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
        drawerType: width > 768 ? 'permanent' : 'front',
        headerShown: false,
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

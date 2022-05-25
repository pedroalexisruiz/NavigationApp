import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ICONS_PER_TABS, TOP_TABS} from './TopTabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../theme/colors';
import {TabBarIcon} from '../BottomTabs/TabBarIcon';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color, focused}) => (
          <TabBarIcon
            color={color}
            focused={focused}
            iconName={ICONS_PER_TABS[route.name]}
          />
        ),
      })}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      {TOP_TABS.map(({name, title, component}) => (
        <Tab.Screen
          name={name}
          options={{title}}
          component={component}
          key={`topTap-${name}`}
        />
      ))}
    </Tab.Navigator>
  );
};

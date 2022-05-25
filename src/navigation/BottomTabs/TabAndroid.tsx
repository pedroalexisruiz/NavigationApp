import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {colors} from '../../theme/colors';
import {TabBarIcon} from './TabBarIcon';
import {ICONS_PER_TABS, TABS} from './Tabs';

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused}) => {
          return (
            <TabBarIcon
              color={color}
              focused={focused}
              iconName={ICONS_PER_TABS[route.name]}
            />
          );
        },
      })}>
      {TABS.map(({name, title, component}) => (
        <BottomTabAndroid.Screen
          name={name}
          options={{
            title,
          }}
          component={component}
          key={`tab-${name}`}
        />
      ))}
    </BottomTabAndroid.Navigator>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme/colors';
import {TabBarIcon} from './TabBarIcon';
import {ICONS_PER_TABS, TABS} from './Tabs';

const BottomTabIOs = createBottomTabNavigator();

export const TabIOs = () => {
  return (
    <BottomTabIOs.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused, size}) => (
          <TabBarIcon
            color={color}
            focused={focused}
            iconName={ICONS_PER_TABS[route.name]}
            size={size}
          />
        ),
      })}>
      {TABS.map(({name, title, component}) => (
        <BottomTabIOs.Screen
          name={name}
          options={{
            title,
          }}
          component={component}
          key={`tab-${name}`}
        />
      ))}
    </BottomTabIOs.Navigator>
  );
};

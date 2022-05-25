import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabBarIcon = ({iconName, color, focused, size}: any) => (
  <Icon name={iconName} size={size ?? 20} color={color} />
);

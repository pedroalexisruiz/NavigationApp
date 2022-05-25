import React from 'react';
import {Platform} from 'react-native';
import {TabAndroid} from './BottomTabs/TabAndroid';
import {TabIOs} from './BottomTabs/TabIOs';

export const Tabs = () =>
  Platform.OS === 'android' ? <TabAndroid /> : <TabIOs />;

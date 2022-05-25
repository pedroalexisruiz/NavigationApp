import Tab1Screen from '../../screens/Tab1Screen';
import StackNavigator from '../StackNavigator';
import {TopTabNavigator} from '../TopTabs/TopTabNavigator';

export const TABS = [
  {name: 'Tab1Screen', title: 'Tab 1', component: Tab1Screen},
  {name: 'Tab2Screen', title: 'Tab 2', component: TopTabNavigator},
  {name: 'StackNavigator', title: 'Stack', component: StackNavigator},
];

export const ICONS_PER_TABS: Record<string, string> = {
  Tab1Screen: 'bandage-outline',
  Tab2Screen: 'basketball-outline',
  StackNavigator: 'bookmarks-outline',
};

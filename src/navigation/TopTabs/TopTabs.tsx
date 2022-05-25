import AlbumsScreen from '../../screens/AlbumsScreen';
import ChatScreen from '../../screens/ChatScreen';
import ContactScreen from '../../screens/ContactScreen';

export const TOP_TABS = [
  {name: 'ChatScreen', title: 'Chat', component: ChatScreen},
  {name: 'ContactScreen', title: 'Contact', component: ContactScreen},
  {name: 'AlbumsScreen', title: 'Albums', component: AlbumsScreen},
];

export const ICONS_PER_TABS: Record<string, string> = {
  ChatScreen: 'chatbox-ellipses-outline',
  ContactScreen: 'people-outline',
  AlbumsScreen: 'albums-outline',
};

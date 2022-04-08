/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Find: {
            screens: {
              FindScreen: 'find'
            }
          },
          Add: {
            screens: {
              AddScreen: 'add'
            }
          },
          Account: {
            screens: {
              AccountScreen: 'account'
            }
          },
          Messages: {
            screens: {
              MessagesScreen: 'messages'
            }
          },
          Observed: {
            screens: {
              ObservedScreen: 'observed'
            }
          }
        }
      },
      Offer: 'offer',
      Modal: 'modal',
      NotFound: '*'
    }
  }
};

export default linking;

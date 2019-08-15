/**
 * @description
 *  - base libarary file for usable styling properties
 */

import { StyleSheet, Dimensions } from 'react-native';

/**
 * @styles - Dimensions
 */

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

/**
 * @styles colors
 */

export const colors = {
  primary: '#0275d8',
  success: '#5cb85c',
  info: '#5bc0de',
  warning: '#f0ad4e',
  danger: '#d9534f',
  dark: '#292b2c',
  faded: '#f7f7f7'
};

/**
 * @styles sizes
 */

export const sizes = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

/**
 * @styles font-families
 */

export const fonts = {
  primary: 'Arial, Helvetica, Verdana'
};
